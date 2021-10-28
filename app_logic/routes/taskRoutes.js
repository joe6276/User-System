const express = require('express')
const taskController= require("../controllers/taskController")
const router=express.Router();



router.route("/").get((req,res)=>{
    try {
        taskController.getTasks().then(result=>{
            res.json(result)
         })
    } catch (error) {
        console.log(error)
    }
   
})
                 


router.route("/:email").get((req,res)=>{

    try {
        taskController.getSpecificTask(req.params.email).then(result=>{
            res.json(result[0])
         })
    } catch (error) {
       console.log(error) 
    }
   
})


router.route("/:id").delete((req,res)=>{

    try {
      taskController.deleteTask(req.params.id).then(result=>{
            res.status(201).json("Task Deleted")
         })
    } catch (error) {

        console.log(error)
        
    }
  
})

router.route("/:id").put((req,res)=>{
    try {
      taskController.updateCompleted(req.params.id).then(result=>{
       res.status(201).json('Task Completed ')
    })
    } catch (error) {
        console.log(error)
    }

})


//  router.route("/:id").put((req,res)=>{
//      try {
         
//         let task ={... req.body  }
//        taskController.updateTask(req.params.id,task).then(result=>{
//         res.status(201).json('Task Updated')
//      })
//      } catch (error) {
//          console.log(error)
//      }
 

// })



router.route("/").post((req,res)=>{
     try {
        let task= { ...req.body} ;

       taskController.addTask(task).then(result=>{
        res.status(201).json('Task  CREATED')
        
     })
         
     } catch (error) {

        console.log(error)
         
     }
 

})

module.exports=router;