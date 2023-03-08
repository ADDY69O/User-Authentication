// // const express=require('express');
// // const app=express();
// // const cors =require('cors')
// // const bodyParser=require('body-parser')
// // const mongoose = require('mongoose')

// const link="mongodb+srv://addy:Adi%4012345@cluster0.zvnftyt.mongodb.net/Authentication?retryWrites=true&w=majority";


// // app.use(cors());
// // app.use(bodyParser.json());



// // mongoose.connect(link,{
// //     useNewUrlParser:true,
// //     useUnifiedTopology:true,
// // }).then(()=>
// // {console.log("Db Connected")}
// // ).catch((err)=> {console.log("connection failed due to -:",err)});


// // const userSchema = new mongoose.Schema({
// //     username:String,
// //     password:String
// // });
// // const users= mongoose.model('users',userSchema);


// // //CRUD 


// // //Create 
// // app.post('/demo',async(req,res)=>{

// //     let User=new users();
// //     User.username=req.body.username;
// //     User.password=req.body.password;
// //    const doc= await User.save();

// //     console.log((doc));
// //     res.send(doc)

// // })

// // //read 
// // app.get('/demo',async(req,res)=>{

// //    const doc=await users.find({});

// //     console.log((doc));
// //     res.send(doc)

// // })



// // app.listen(8000,(req,res)=>{
// //     console.log('listening on port 8000');
// // })