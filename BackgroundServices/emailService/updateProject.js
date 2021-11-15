require('dotenv').config();
const db = require("../dbs")
const nodemailer=require('nodemailer');
const ejs=require('ejs')


const { sendMail } = require("../helpers/email");
module.exports=async()=>{
  const items = await (await db.query("SELECT * FROM Projects where issent = 2")).recordset
     for(let item of items){
       
       const project=item.projectname.trim()
       const projectduration=item.projectduration.trim()
       const email= item.email.trim()
       const today = item.createdat
    

       

        ejs.renderFile('templates/updateP.ejs', {project ,today,projectduration }, async (error, data) => {
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
               
                `UPDATE Projects SET issent = 1 where projectid= ${item.projectid}`
              );
              console.log(`Registration Email sent to ${email}`);
          } catch (error) {
              console.log(error.message);
              console.log(`Couldn't send email to ${email}`);
          }

            
        })

     }     
}