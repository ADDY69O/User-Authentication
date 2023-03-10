const express =require('express');
const router =express.Router();

const {about,createAccount,deleteAccount,login,logout}= require('../Controllers/Controllers.js');



//CRUD 


//Create 
router.get('/',async(req,res)=>{
    res.send("At home page");
})
router.put('/logout',logout);

router.get('/about',about);
router.post('/register',createAccount);
router.post('/login',login);
router.delete('/delete',deleteAccount);



module.exports= router;