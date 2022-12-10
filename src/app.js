require("dotenv-safe").config();
const express = require("express"); 
const cors = require("cors");
const mongoose = require("./database/mongooseConnect")
const routes = require("./routes/userRouters"); 

const app = express(); 

app.use(express.json()); 
app.use(cors())
mongoose.connect()

app.use("/conectararos/users", routes);

// exportando para usar o server.js
module.exports = app;