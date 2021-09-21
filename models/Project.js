const db=require("../config/db")

class Project {
    constructor( projectname,email ,projectduration){
       this.projectduration=projectduration;
       this.projectname=projectname;
       this.email=email;

    }
}
module.exports= Project;