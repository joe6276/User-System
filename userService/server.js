require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP
const cors = require('cors');
const express = require("express");
const app = express();

// Middleware
app.use(express.json()); // parse json bodies in the request object
app.use(cors())


app.use("/users", require("./routes/userRoutes"));



const PORT = 8000 ;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
