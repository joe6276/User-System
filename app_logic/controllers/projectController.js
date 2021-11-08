const { add } = require('lodash')
const sql= require('mssql')
const db = require("../config/db")



async function getprojects(){
    try {
        let pool= await sql.connect(db)
        let projects= await pool.request().
        execute('getProjects')
        const p =projects.recordset.map(p=>{
            return {
                projectid: p.projectid,
                projectname: p.projectname.trim(),
                projectduration: p.projectduration.trim(),
                email: p.email.trim()
            }
        })
        return p
    } catch (error) {
        console.log(error)
        
    }
}

async function getSpecificProject(email){
    try {
        let pool= await sql.connect(db)
        let projects= await pool.request()
        .input('email', sql.VarChar, email)
        .execute('getProjectByEmail')
        //.query("select * from Projects where projectid=@input_parameter")
        return projects.recordsets
    } catch (error) {
        console.log(error)
        
    }
}

async function getProjectById(id){
    try {
        let pool= await sql.connect(db)
        let projects= await pool.request()
        .input('id', sql.VarChar, id)
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
        console.log(projects.recordsets);
        return projects.recordsets
        
    } catch (error) {
        console.log(error)
        
    }
    
}

module.exports={
    getprojects:getprojects,
    getSpecificProject:getSpecificProject,
    deleteProject:deleteProject,
    updateProject:updateProject,
    addProject:addProject,
    getProjectById:getProjectById
} 
