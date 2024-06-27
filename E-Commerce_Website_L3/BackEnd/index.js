require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // If you are sending cookies or authorization headers
  })
);
app.use(express.json()); //for accept json data
app.use(express.urlencoded({ extended: false }));

//connection
const DatabaseConnection = require("./Connection.js");
DatabaseConnection(process.env.mongo);

//Routers
const userRouter = require("./Router/User.router.js");
app.use("/user", userRouter);

app.listen(process.env.PORT || 8000, () =>
  console.log(`server running in http://localhost:${process.env.PORT}`)
);
