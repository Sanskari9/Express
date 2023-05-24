const express = require("express");
const path = require("path");
const bodyParser = require("body-parser")
const router = require("./userRoutes");

const app = express();
const port = 4000;
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json())

app.get("/api/v1/userdata",(req,res)=>{
    res.json({
        name: "Santosh",
        email: "Sample@gmail.com",
        password: "hexed",
    });
});

app.post("/api/v1/register",)


app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
})