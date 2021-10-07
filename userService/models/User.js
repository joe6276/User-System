const db=require("../config/db")

class User{
    constructor( firstname,secondname,email,password){
       this.firstname= firstname;
       this.secondname=secondname;
       this.email=email;
       this.password=password;

    }
}
module.exports= User;