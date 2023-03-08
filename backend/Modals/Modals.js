const mongoose = require("mongoose");

const userSchema=new mongoose.Schema({
    username:String, 
    email:String,  

    password:String,
    cpassword:String,   

    
})

const Auth = mongoose.model('Auth',userSchema);

module.exports = Auth;
