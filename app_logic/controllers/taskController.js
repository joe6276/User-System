const sql= require('mssql')
const db = require("../config/db")



async function getTasks(){
    try {
        let pool= await sql.connect(db)
        let tasks= await pool.request().
        execute('getTask')
        return tasks.recordset
    } catch (error) {
        console.log(error)
        
    }
}

async function getSpecificTask(email){
    try {
        let pool= await sql.connect(db)
        let tasks= await pool.request()
        .input('email', sql.VarChar, email)
        .execute('getSpecificTask')
        // .query("select * from Tasks where taskid=@input_parameter")
        console.log(tasks.recordset);
        return tasks.recordsets
    } catch (error) {
        console.log(error)
        
    }
}

async function getTaskById(id){
    
    try {
        let pool= await sql.connect(db)
        let tasks= await pool.request()
        .input('id', sql.Int, id)
        .execute('getaTask')
        return tasks.recordsets
    } catch (error) {
        console.log(error)
        
    }
}


async function deleteTask(takid){
    try {
        let pool= await sql.connect(db)
        let tasks= await pool.request()
        .input('id', sql.Int, takid)
        .execute('deleteTask')
        //.query("delete from Tasks where taskid=@input_parameter")
        return tasks.recordsets
    } catch (error) {
        console.log(error)
        
    }
}


async function updateTask(takid,task){
    try {
        let pool= await sql.connect(db)
        let tasks= await pool.request()
        .input('id', sql.Int, takid)
        .input('taskdescription',sql.VarChar,task.taskdescription)
        .input('project',sql.VarChar,task.project)
        .input('email',sql.VarChar,task.email)
        .execute('updateTasks')



        // .query(`UPDATE Tasks SET taskdescription  ='${taskdescription}'
        //  ,project ='${project}',createdat ='${createdat}',status ='${status}'
        //  ,email ='${email}'
        //   WHERE taskid = @input_parameter`)
        return tasks.recordsets
    } catch (error) {
        console.log(error)
        
    }
}



async function updateCompleted(id){
    try {
        let pool= await sql.connect(db)
        let tasks= await pool.request()
        .input('id', sql.Int, id)
        .execute('updateCompleted')
        return tasks.recordsets
    } catch (error) {
        console.log(error)
        
    }
}

async function addTask(task){
    try {
        let pool= await sql.connect(db)
        let tasks= await pool.request()
        .input('taskdescription',sql.VarChar,task.taskdescription)
        .input('project',sql.VarChar,task.project)
        .input('email',sql.VarChar,task.email)
        .execute('addTask')

        //.query(`INSERT INTO Tasks(taskdescription,project,createdat,status,email) VALUES(@taskdescription,@project, @createdat ,@status,@email)`)
        return tasks.recordsets
        
    } catch (error) {
        console.log(error)
        
    }
    
}

module.exports={
    getTasks:getTasks,
    getSpecificTask:getSpecificTask,
    deleteTask:deleteTask,
    updateTask:updateTask,
    addTask:addTask,
    updateCompleted:updateCompleted,
    getTaskById:getTaskById
} 
