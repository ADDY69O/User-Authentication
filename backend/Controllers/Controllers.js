const express =require('express');
const bodyParser=require('body-parser');
const bcrypt=require('bcryptjs')
const modals =require('../Modals/Modals.js');
const { response } = require('express');
const router =express.Router();



 const about=async(req,res)=>{
  
  const userFind=await modals.findOne({isLogin:true});
  
  if(!userFind){
    return res.status(422).json({message: 'Login Again'});
  }
  else{
    try{
      return res.status(201).send(userFind);
    }
    catch(err){

      console.log(err);

    }

  }



}

const logout=async(req,res)=>{

  const userFind=await modals.findOne({isLogin:true});

  if(!userFind){
    return res.status(422).json({error:"Login Again"});
  }
  else{
    try{  
      userFind.isLogin = false;
     await userFind.save();
      return res.status(201).json({message:"Logout Successfully"});
    }
    catch(err){
      console.log(err);
    }

  }

  

}


const login =async(req,res)=>{

  const {email,password} = req.body;

  if(!email || !password){
   return  res.status(422).json({error:"Filled the required credentials"});
  }
  const userFind=await modals.findOne({email:email});

  if(!userFind ){
   return  res.status(422).json({error:"doesn't find any account associated with this email"})
  }
  if( !bcrypt.compareSync(password, userFind.password)){
   return  res.status(422).json({error:"password doesn't match"})
  }
  else{
    try{
      userFind.isLogin=true;
    await  userFind.save()
   return  res.status(201).json({message:"Successfully login"})
    }
    catch(err){
      console.log(err);
    }

  }






}

 const createAccount=async(req,res)=>{
  const {username,email,password,cpassword}=  req.body;
    if(!username || !email || !password || !cpassword){
      console.log(username,email,password,cpassword);

     return   res.status(422).json({error:" Filled the required credentials"});
    }
     if(password.length <8 ){
    return    res.status(422).json({error:"password length should be greater than 8"});

    }
     if(password!==cpassword){
     return   res.status(422).json({error:"confirm password should be same as password"});
    }
    const userFind=await modals.findOne({email:email});

      if(userFind){
        return res.status(422).json({error:"Already user present "})
      }
      

    
      let user=new modals();
      user.username=username;
      user.email=email;
      user.password=password;
      user.cpassword=cpassword;
      user.isLogin=false;

      try{
       
       const doc= await user.save()
       console.log(doc);
        return res.status(201).json({message:"Account Created successfully"});
      }
      catch(err){
        console.log(err);
      }

      
      


    



}

 const deleteAccount=async(req,res)=>{
  const  doc =  await modals.deleteMany({isLogin:true});
  if(!doc){
    return res.status(422).json({error:"Login Again"});
  }
  else{

    try{
      
      return res.status(201).json({message:"Account deleted Successfully"});
    }
    catch(error){
  
    }
  }



}

module.exports= {router,about,createAccount,deleteAccount,login,logout};
