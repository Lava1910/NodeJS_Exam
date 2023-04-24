const User = require("../models/user");

exports.get = function (req,res){
    res.render("home");
}

exports.userList = (req,res) => {
    User.find({}).then(rs=>{
        res.render("userList",{
            item: rs
        });
    }).catch(err=>{
        res.send(err);
    });
}

exports.add = (req,res) => {
    res.render("add");
}

exports.addin = (req,res) => {
    let s = req.body;
    let newUser = new User(s);
    newUser.save().then(rs=>{
        res.redirect("/user-list");
    }).catch(err=>{
        res.send(err);
    })
}