






async function getUsers(){
    try {
        let pool= await sql.connect(db)
        let user= await pool.request().execute('getUsers')
        return user.recordsets
    } catch (error) {
        console.log(error)
        
    }
}

async function getSpecificUser(userid){
    try {
        let pool= await sql.connect(db)
        let user= await pool.request()
        .input('id', sql.Int, userid)
       .execute('getSpecificUser')
        return user.recordsets
    } catch (error) {
        console.log(error)
        
    }
}




async function deleteUser(userid){
    try {
        let pool= await sql.connect(db)
        let user= await pool.request()
        .input('id', sql.Int, userid)
       .execute('deleteUser')
        return user.recordsets
    } catch (error) {
        console.log(error)
        
    }
}


async function updateUser(userid,user){
    try {
        let pool= await sql.connect(db)
        
       
        const salt = await bcrypt.genSalt(10)
        const hashpass = await bcrypt.hash(user.password,salt)
        let users= await pool.request()
        .input('id', sql.Int, userid)
        .input('firstname',sql.VarChar,user.firstname)
        .input('secondname',sql.VarChar,user.secondname)
        .input('email',sql.VarChar,user.email)
        .input('password',sql.VarChar,hashpass)
        .execute("UpdateUser")
 
        return users.recordsets
    } catch (error) {
        console.log(error)
        
    }
}





module.exports={
    getUsers:getUsers,
    getSpecificUser:getSpecificUser,
    deleteUser:deleteUser,
    updateUser:updateUser,
} 
