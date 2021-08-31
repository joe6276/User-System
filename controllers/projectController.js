
const Project = require("../models/Project");

 exports.getProjects= async (req,res,next)=>{
    try {
    const [project,_]= await Project.findAllProject();
    res.status(200).json({project})

    } catch (error) {
        
    }
}



 exports.addnewProject=async(req,res,next)=>{
    try {
        let{projectname ,projectduration,email}= req.body;
        let project= new Project( projectname,projectduration ,email )
        project= await project.addProject()
        res.status(201).json({message: "Project Created"});
        
    } catch (error) {

        res.status(500).json({Message: "User already has a project use a different Email please"});
        
    }
}



exports.searchProject=async(req,res,next)=>{
    try {
        let projectid=req.params.id;
        let[project,_]=await Project.findProject(projectid)
        res.status(200).json({project})
    } catch (error) {
        res.status(500).json({Message: "Recheck your id if it exists"});
        
    }
 
}

exports.deleteProject=async(req,res,next)=>{

    try {
        let projectid=req.params.id;
        let[project,_]=await Project.deleteProject(projectid)
        res.status(201).json({message:"Project Deleted"})
        
    } catch (error) {
        res.status(500).json({Message: "Recheck your id if it exists"});
        next(error)
        
    }
  
}

exports.updateProject = async(req,res)=>{
    try {

        let updateid = req.params.id;
        
        let { projectname, projectduration, email} = req.body;
        await Project.updateProject(updateid,projectname, projectduration, email)
        res.status(201).json({ message: "Project  updated  successfully" })

    } catch (error) {

        res.status(201).json({ message: error.message })
        
    }
}
