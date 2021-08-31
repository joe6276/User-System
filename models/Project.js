const db=require("../config/db")

class Project {
    constructor( projectname,email ,projectduration){
       this.projectduration=projectduration;
       this.projectname=projectname;
       this.email=email;

    }

    async addProject(){

       
         let sql=`
        INSERT INTO project(
            projectname ,projectduration ,email)
            VALUES(
             '${this.projectname}',
            '${this.email}',
            '${this.projectduration}'           
                      
            )` ;
        
      const [newproject,_]=await db.execute(sql)
      return newproject;
            
    }
    static findAllProject(){

        let sql= " SELECT * FROM project"
        return db.execute(sql);
    }

    static findProject(id){

        let sql= `SELECT * FROM project WHERE projectid = ${id}`
        return db.execute(sql)
    }

    static deleteProject(id){
        let sql=`DELETE FROM project WHERE projectid= ${id}`
        return db.execute(sql);
    }
    
    static updateProject(id,projectname, projectduration,email,) {
        let sql = `UPDATE project SET  projectname ='${projectname}' ,projectduration ='${projectduration}',email ='${email}' WHERE projectid = ${id}`;
        return db.execute(sql);
    }

}
module.exports= Project;