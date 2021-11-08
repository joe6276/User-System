require('dotenv').config();
const db = require("../dbs")
const nodemailer=require('nodemailer');
const ejs=require('ejs')


const { sendMail } = require("../helpers/email");
module.exports=async()=>{
  const items = await (await db.query("SELECT * FROM studentData where issent = 0")).recordset

     for(let item of items){
       const email = item.email.trim()
       const names=item.firstname.trim()
       const id=item.id
       console.log(email)
          console.log(names)
       

        ejs.renderFile('templates/registration.ejs', { username: names, email}, async (error, data) => {
            if (error) return console.log(error);
            const message = {
            from: {
              name: "User System",
              address: process.env.email,
            },
            to: email,
            subject: "Welcome To User System ",
            html: data,
          };
          try {
              await sendMail(message);
              db.query(
               
                `UPDATE studentData SET issent = 1 where id = ${item.id}`
              );
              console.log(`Registration Email sent to ${email}`);
          } catch (error) {
              console.log(error.message);
              console.log(`Couldn't send email to ${email}`);
          }

            
        })

     }     
}