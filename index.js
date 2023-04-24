const express = require("express");
require("dotenv").config();
const database = require("./src/database");

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log("Serve is running.........");
})
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const User = require("./src/models/user");

app.get("/",function (req,res){
    res.render("home");
})

app.get("/user-list", (req,res) => {
    User.find({}).then(rs=>{
        res.render("userList",{
            item: rs
        });
    }).catch(err=>{
        res.send(err);
    });
})

app.get("add",(req,res) => {
    res.render("add");
})