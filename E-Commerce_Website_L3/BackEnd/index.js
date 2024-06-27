require("dotenv").config();
const express = require("express");
const app = express();

//connection
const DatabaseConnection = require("./Connection.js");
DatabaseConnection(process.env.mongo);

//Routers
const userRouter = require("./Router/User.router.js");
app.use("/user", userRouter);

app.listen(process.env.PORT || 8000, () =>
  console.log(`server running in http://localhost:${process.env.PORT}`)
);
