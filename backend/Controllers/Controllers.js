const express =require('express');
const bodyParser=require('body-parser');

const modals =require('../Modals/Modals.js');
const router =express.Router();



 const getAllUsers=async(req,res)=>{



res.send('At all users page');

}

 const createAccount=async(req,res)=>{
    let User =new modals({username:req.body.username,email:req.body.email,password:req.body.password,cpassword:req.body.cpassword});
      
      

    try{
      const doc= await User.save();
        console.log(doc);
        res.json({message :"Account created Successfully"});
    }
    catch(err){
        console.log(err);
    }



}

 const deleteAccount=async(req,res)=>{


}

module.exports= {router,getAllUsers,createAccount,deleteAccount};
