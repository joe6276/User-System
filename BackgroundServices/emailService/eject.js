require('dotenv').config();
const db = require("../dbs")
const nodemailer=require('nodemailer');
const ejs=require('ejs')


const { sendMail } = require("../helpers/email");
module.exports=async()=>{
  const items = await (await db.query("SELECT * FROM studentData where ejected = 2")).recordset
     for(let item of items){
       const email= item.email.trim()
       const firstname= item.firstname.trim()
    

       

        ejs.renderFile('templates/eject.ejs',{ firstname}, async (error, data) => {
            if (error) return console.log(error);
            const message = {
            from: {
              name: "UPDATE ON A PROJECT",
              address: process.env.email,
            },
            to: email,
            subject: " Project UPDATE ",
            html: data,
          };
          try {
              await sendMail(message);
              db.query(
               
                `UPDATE studentData SET ejected = 1 where email= ${email}`
              );
              console.log(`Registration Email sent to ${email}`);
          } catch (error) {
              console.log(error.message);
              console.log(`Couldn't send email to ${email}`);
          }

            
        })

     }     
}