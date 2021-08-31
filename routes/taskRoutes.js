const express = require('express')
const taskController= require("../controllers/taskController")
const router=express.Router();
const verifyToken = require('../middlewares/auth')

router.route("/").get(taskController.getTasks)
.post(verifyToken, taskController.addnewTask)

router.route("/:id").get(taskController.searchTask)
router.route("/:id").delete(verifyToken, taskController.deleteTask)
router.route("/:id").put(verifyToken, taskController.updateTask)


module.exports=router;