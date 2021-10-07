require("dotenv").config(); 
const cors = require('cors');
const express = require("express");
const app = express();

// Middleware
app.use(express.json()); 
app.use(cors())

app.use("/tasks", require("./routes/taskRoutes"));

// Listen on  port
const PORT = 8080 ;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
