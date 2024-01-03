const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const Router=require("./routers/addressRoutes");
const cors = require("cors");
const connectDB =require('./database/connection');
const {PORT} = process.env;
const port = 8000 || PORT;

app.use(express.json());
app.use(cors());
app.use("/address",Router);

//MongoDB connection
connectDB();

app.listen(port, () => {
    console.log(`Server started listen to the port ${port}`);
})