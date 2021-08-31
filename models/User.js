const db=require("../config/db")

class User{
    constructor( firstname,secondname,email,password){
       this.firstname= firstname;
       this.secondname=secondname;
       this.email=email;
       this.password=password;

    }

    async save(){

       
         let sql=`
        INSERT INTO usersdata(
            firstname,secondname,email,password)
            VALUES('${this.firstname}'
            , '${this.secondname}',
            '${this.email}',
            '${this.password}'
                      
            )` ;
        
      const [newUser,_]=await db.execute(sql)
      return newUser;
            
    }
    static findAll(){

        let sql= " SELECT * FROM usersdata"
        return db.execute(sql);
    }

    static findById( id){

        let sql= `SELECT * FROM usersdata WHERE id = ${id}`
        return db.execute(sql)
    }

    static deleteUser(id){
        let sql=`DELETE FROM usersdata WHERE id= ${id}`
        return db.execute(sql);
    }

    static userLogin(email) {
        let sql = `SELECT * FROM usersdata WHERE email = '${email}'`;
        return db.execute(sql);
    }

    static updateUser(id,firstname,secondname,email,password) {
        let sql = `UPDATE usersdata SET  firstname ='${firstname}' ,secondname ='${secondname}',email ='${email}',password ='${password}' WHERE id = ${id}`;
        return db.execute(sql);
    }
   

}
module.exports= User;