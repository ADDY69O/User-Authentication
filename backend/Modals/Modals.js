const mongoose = require("mongoose");
const bcrypt=require('bcryptjs');
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    }, 
    email:{
        type:String,
        unique:true,
        require:true
    
    },  

    password:{
        type:String,
        require:true
    }, 
    cpassword:{
        type:String,
        require:true
    }, 
    isLogin:Boolean

    
})

userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,15);
        this.cpassword= await bcrypt.hash(this.cpassword,15);
        
    }
    next();
})

const Auth = mongoose.model('Auth',userSchema);

module.exports = Auth;
