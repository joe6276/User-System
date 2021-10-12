const express = require('express')
const user= require("../controllers/user")

const auth= require("../controllers/auth")
const router=express.Router();
const jwt = require("jsonwebtoken")
require('dotenv').config();

router.route("/").get((req,res)=>{
    try {
        user.getUsers().then(result=>{
            res.json(result[0])
         })
    } catch (error) {
        console.log(error)
    }
   
})
                 

router.route("/:id").get((req,res)=>{

    try {
        user.getSpecificUser(req.params.id).then(result=>{
            res.json(result[0])
         })
    } catch (error) {
       console.log(error) 
    }
   
})



router.post('/signin', auth.loginUser)


router.route("/:id").delete((req,res)=>{

    try {
        user.deleteUser(req.params.id).then(result=>{
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
        user.updateUser(req.params.id,user).then(result=>{
        res.status(201).json('USER Updated')
     })
     } catch (error) {
         console.log(error)
     }
 

})

router.route("/signup").post((req,res)=>{
     try {
        let user= { ...req.body} ;

      auth.addUser(user).then(result=>{
        
        const token = jwt.sign({ user }, process.env.DB_SECRET, { expiresIn: 360000 })
        res.status(201).json( {user ,token: token})
        
        
     })
         
     } catch (error) {

        console.log(error)
         
     }
 

})

module.exports=router;