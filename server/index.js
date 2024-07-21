const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/authRoute");

app.use(express.json());
app.use(cors());

app.use("/api/auth", router);

mongoose
.connect("mongodb://127.0.0.1:27017/authentication")
.then(()=>console.log("MongoDB connected"))
.catch((err)=>console.log(`MongoDB not connected ${err}`));

app.use((err, req, res, next)=>{
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    res.status(err.statusCode).json({
        status:err.status,
        message:err.message,
    });
});

app.listen(3000, ()=>{
    console.log("App is started at port 3000");
})