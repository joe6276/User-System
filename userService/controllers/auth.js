const sql= require('mssql')
const db = require("../config/db")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

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
    .input('email',sql.VarChar,email)
    .execute('checkemail')
    //.query(`SELECT * FROM studentData WHERE email = '${email}.t'`)
       const result  = user.recordset[0];
        
        if (!result) res.status(400).send({Message: "User does not Exist"})
        const validPassword = await bcrypt.compare(password, result.password.trim());


        if (!validPassword) return res.status(400).send ({ message: 'Invalid password' });

        const token = jwt.sign(result, process.env.DB_SECRET, { expiresIn: 360000 })

        res.send({id: result.id, firstname: result.firstname ,
           secondname: result.secondname,
            email:result.email,
            role: result.role,
            project:result.project            
            ,Message : "Login Successful", token })

    } catch (error) {
        console.log(error)
        
    }
    
        
        

}

const getLoggedUser = async(req,res) =>{
    console.log(req.user);
    try {
        let pool= await sql.connect(db)
    let {recordset} = await pool.request()
    .input('email',sql.VarChar,req.user.email)
    .execute('checkemail')
    
    const user = recordset[0];

    res.status(200).json({user})
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}


module.exports={

    addUser:addUser,
    loginUser:loginUser,
    getLoggedUser
}