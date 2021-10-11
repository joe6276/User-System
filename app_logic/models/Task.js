const db=require("../config/db")

class Task {
    constructor(taskdescription,project,createdat,status,email){
      this.taskdescription=taskdescription;
      this.project=project;
      this.createdat=createdat;
      this.status=status;
      this.email=email;

    }
}
module.exports= Task;