require('dotenv').config();
const db = require("../dbs")
const nodemailer=require('nodemailer');
const ejs=require('ejs')


const { sendMail } = require("../helpers/email");
module.exports=async()=>{
  const items = await (await db.query("SELECT * FROM Tasks where issent = 0")).recordset
     for(let item of items){
         console.log(item)
       
       const project=item.project.trim()
       const taskd=item.taskdescription.trim()
       const email= item.email.trim()
       const today = item.createdat
    

       

        ejs.renderFile('templates/sentTask.ejs', {project ,today,taskd}, async (error, data) => {
            if (error) return console.log(error);
            const message = {
            from: {
              name: "NEW Task ",
              address: process.env.email,
            },
            to: email,
            subject: "Assigned New task",
            html: data,
          };
          try {
              await sendMail(message);
              db.query(
               
                `UPDATE Tasks SET issent = 1 where taskid= ${item.taskid}`
              );
              console.log(`Registration Email sent to ${email}`);
          } catch (error) {
              console.log(error.message);
              console.log(`Couldn't send email to ${email}`);
          }

            
        })

     }     
}