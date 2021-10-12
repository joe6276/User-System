const sql= require('mssql')
const db = require("../config/db")
const bcrypt = require("bcryptjs")


async function addUser(user){
    try {
        let pool= await sql.connect(db)
        const salt = await bcrypt.genSalt(10)
        const hashpass = await bcrypt.hash(user.password,salt)
    
        let users= await pool.request()
      
        .input('firstname',sql.VarChar,user.firstname)
        .input('secondname',sql.VarChar,user.secondname)
        .input('email',sql.VarChar,user.email)
        .input('password',sql.VarChar,hashpass)
        .execute('insertUser')

       


        return users.recordsets
        

        
    } catch (error) {
        console.log(error.message)
      
        
        
    }
    
}

async function loginUser(req,res){
    try {
        
        const{email,password}= req.body
    let pool= await sql.connect(db)
    let user= await pool.request()
    .query(`SELECT * FROM StudentData WHERE email = '${email}'`)
       const result  = user.recordset[0];
        
        if (!result) res.send({Message: "User does not Exist"})
        const validPassword = await bcrypt.compare(password, result.password.trim());


        if (!validPassword) return res.send ({ message: 'Invalid password' });

        res.send({ Message : "Login Successful" })

    } catch (error) {
        console.log(error)
        
    }
    
        
        

}

module.exports={

    addUser:addUser,
    loginUser:loginUser
}