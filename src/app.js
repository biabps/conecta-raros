const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');

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
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app;