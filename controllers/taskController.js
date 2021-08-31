
const Task = require("../models/Task");
exports.getTasks=async(req,res,next)=>{
try {
const [task,_]= await Task.findAllTasks();
res.status(200).json({task})

} catch (error) {
   
}
}



exports.addnewTask=async(req,res,next)=>{
   try {
       let{description,project}= req.body;
       let task= new Task(description,project)
       task= await task.addTask()
       res.status(201).json({message: "Task Added"});
       
   } catch (error) {

      
       
   }
}



exports.searchTask=async(req,res,next)=>{
   try {
       let taskid=req.params.id;
   let[task,_]=await Task.findTask( taskid)
   res.status(200).json({task})
   } catch (error) {
       res.status(500).json({Message: "Recheck your id if it exists"});
       
   }

}

exports.deleteTask=async(req,res,next)=>{

   try {
       let  taskid= req.params.id;
       let[task,_]=await Task.deleteTask( taskid)
       res.status(201).json({message:"Task Deleted"})
       
   } catch (error) {
       res.status(500).json({Message: "Recheck your id if it exists"});
       
   }
 
}


exports.updateTask = async(req,res)=>{
    try {

        let updateid = req.params.id;
        
        let { description,project} = req.body;
        await Task.updateTask(updateid,description,project)
        res.status(201).json({ message: "Task  updated  successfully" })

    } catch (error) {

        res.status(201).json({ message: error.message })
        
    }
}

