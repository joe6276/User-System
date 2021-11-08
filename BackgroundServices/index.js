require('dotenv').config()
const express= require('express')
const mssql= require('mssql')
const app= express();
const regTask  = require('./emailService/registration')
const sentProject  = require('./emailService/tasks')
const sentEmail= require('./emailService/sentTask')
const cron = require('node-cron');
const run = async()=>{
  cron.schedule('*/10 * * * * *', async() => {
    console.log("running")
    await regTask()
    await sentProject()
    await sentEmail()
 
  });
}

run()

const PORT = 8080
app.listen(PORT, () =>console.log(`Service running on port ${PORT}`))