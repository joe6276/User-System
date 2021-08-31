const express = require('express')
const projectController= require("../controllers/projectController")
const router=express.Router();
const verifyToken = require('../middlewares/auth')

router.route("/").get(projectController.getProjects)
.post(verifyToken, projectController.addnewProject)

router.route("/:id").get(projectController.searchProject)
router.route("/:id").delete(verifyToken, projectController.deleteProject)
router.route("/:id").put(verifyToken, projectController.updateProject)

module.exports=router;