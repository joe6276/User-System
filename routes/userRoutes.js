const express = require('express')
const userController= require("../controllers/userControllers")
const router=express.Router();
const verifyToken = require('../middlewares/auth')

router.route("/").get(userController.getUsers)
                 
router.route('/signup').post(userController.registerUser)

router.route('/signin').post(userController.loginUser)

router.route("/:id").get(userController.searchUser)
router.route("/:id").delete(verifyToken, userController.deleteUser)
router.route("/:id").put(verifyToken, userController.updateUser)

module.exports=router;