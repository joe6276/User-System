const express = require('express')
const projectController= require("../controllers/projectController")
const router=express.Router();


router.route("/").get((req,res)=>{
    try {
        projectController.getprojects().then(result=>{
            res.json(result[0])
         })
    } catch (error) {
        console.log(error)
    }
   
})
                 


router.route("/:email").get((req,res)=>{

    try {
        projectController.getSpecificProject(req.params.email).then(result=>{
            res.json(result[0])
         })
    } catch (error) {
       console.log(error) 
    }
   
})


router.route("/:id").delete((req,res)=>{

    try {
      projectController.deleteProject(req.params.id).then(result=>{
            res.status(201).json("Project Deleted")
         })
    } catch (error) {

        console.log(error)
        
    }
  
})
 router.route("/:id").put((req,res)=>{
     try {
         
        let project= {...req.body } 
        projectController.updateProject(req.params.id,project).then(result=>{
        res.status(201).json('Project Updated')
     })
     } catch (error) {
         console.log(error)
     }
 

})

router.route("/").post((req,res)=>{
    console.log(req.body);
     try {
        let project= { ...req.body} ;

        projectController.addProject(project).then(result => {
            res.status(201).json('Project CREATED')
        
        })
         
     } catch (error) {

       console.log('THE ERROR IS ', error);

        // if(error.ErrorMessageToken.message) return res.status(403).json({ message: 'User already allocated a project!' })
    //     res.status(403).json({ Message: "User already Exist use a different Email please" });
    //    console.log ('THE ERROR IS ', error.Message)
         
     }
 

})

module.exports=router;
