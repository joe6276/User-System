const { add } = require('lodash')
const sql= require('mssql')
const db = require("../config/db")



async function getprojects(){
    try {
        let pool= await sql.connect(db)
        let projects= await pool.request().
        execute('getProjects')
        return projects.recordsets
    } catch (error) {
        console.log(error)
        
    }
}

async function getSpecificProject(projectid){
    try {
        let pool= await sql.connect(db)
        let projects= await pool.request()
        .input('id', sql.Int, projectid)
        .execute('getSpecificProject')
        //.query("select * from Projects where projectid=@input_parameter")
        return projects.recordsets
    } catch (error) {
        console.log(error)
        
    }
}


async function deleteProject(projid){
    try {
        let pool= await sql.connect(db)
        let project= await pool.request()
        .input('id', sql.Int, projid)
        .execute('deleteProject')

        //.query("delete from Projects where projectid=@input_parameter")
        return project.recordsets
    } catch (error) {
        console.log(error)
        
    }
}


async function updateProject(projectid,project){
    try {
        let pool= await sql.connect(db)
        let projects= await pool.request()
        .input('id', sql.Int, projectid)
        .input('projectname',sql.VarChar,project.projectname)
        .input('projectduration',sql.VarChar,project.projectduration)
        .input('email',sql.VarChar,project.email)
        .execute('updateProject')
        
        // .query(`UPDATE Projects SET  projectname ='${projectname}'
        //  ,projectduration ='${projectduration}',email ='${email}'
        //   WHERE projectid = @input_parameter`)
        return projects.recordsets
    } catch (error) {
        console.log(error)
        
    }
}


async function addProject(project){
    try {
        let pool= await sql.connect(db)
        let projects= await pool.request()
        .input('projectname',sql.VarChar,project.projectname)
        .input('projectduration',sql.VarChar,project.projectduration)
        .input('email',sql.VarChar,project.email)
        .execute('addProject')
        //.query('INSERT INTO Projects(projectname,projectduration,email) VALUES( @projectname, @projectduration, @email)')
        return projects.recordsets
        
    } catch (error) {
        console.log(error)
        Json({ message: error.message })
        
    }
    
}

module.exports={
    getprojects:getprojects,
    getSpecificProject:getSpecificProject,
    deleteProject:deleteProject,
    updateProject:updateProject,
    addProject:addProject
} 
