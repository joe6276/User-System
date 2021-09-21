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
                 


router.route("/:id").get((req,res)=>{

    try {
        projectController.getSpecificProject(req.params.id).then(result=>{
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
     try {
        let project= { ...req.body} ;

        projectController.addProject(project).then(result=>{
        res.status(201).json('Project CREATED')
        
     })
         
     } catch (error) {

        console.log(error)
         
     }
 

})

module.exports=router;
