const db=require("../config/db")

class Task {
    constructor(description,project){
      this.description=description;
      this.project=project;

    }

    async addTask(){

       
         let sql=`
        INSERT INTO task(
            description,project)
            VALUES('${this.description}'
            , '${this.project}'
                      
            )` ;
        
      const [newTask,_]=await db.execute(sql)
      return newTask;
            
    }
    static findAllTasks(){

        let sql= " SELECT * FROM task"
        return db.execute(sql);
    }

    static findTask( id){

        let sql= `SELECT * FROM task WHERE taskid = ${id}`
        return db.execute(sql)
    }

    static deleteTask(id){
        let sql=`DELETE FROM task WHERE  taskid= ${id}`
        return db.execute(sql);
    }

    static updateTask(id,description,project) {
        let sql = `UPDATE task SET description ='${description}' ,project ='${project}' WHERE taskid = ${id}`;
        return db.execute(sql);
    }
   

}
module.exports= Task;