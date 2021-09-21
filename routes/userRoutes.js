const express = require('express')
const userController= require("../controllers/userControllers")
const router=express.Router();
const jwt = require("jsonwebtoken")
require('dotenv').config();

router.route("/").get((req,res)=>{
    try {
        userController.getUsers().then(result=>{
            res.json(result[0])
         })
    } catch (error) {
        console.log(error)
    }
   
})
                 

router.route("/:id").get((req,res)=>{

    try {
        userController.getSpecificUser(req.params.id).then(result=>{
            res.json(result[0])
         })
    } catch (error) {
       console.log(error) 
    }
   
})


router.route("/:id").delete((req,res)=>{

    try {
        userController.deleteUser(req.params.id).then(result=>{
            res.status(201).json("User deleted")
         })
    } catch (error) {

        console.log(error)
        res.status(503).json('No user with that id')
        
    }
  
})
 router.route("/:id").put((req,res)=>{
     try {
         
        let user= { ...req.body} ;
        userController.updateUser(req.params.id,user).then(result=>{
        res.status(201).json('USER Updated')
     })
     } catch (error) {
         console.log(error)
     }
 

})

router.route("/signup").post((req,res)=>{
     try {
        let user= { ...req.body} ;

        userController.addUser(user).then(result=>{
        res.status(201).json('USER CREATED')
        
        // const token =  jwt.sign({ user_id: user.id.toString() }, "secret", { expiresIn: 360000 })

        // res.status(201).json({ token });
        
     })
         
     } catch (error) {

        console.log(error)
         
     }
 

})

module.exports=router;