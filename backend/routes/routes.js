const express =require('express');
const router =express.Router();

const {getAllUsers,createAccount,deleteAccount,login}= require('../Controllers/Controllers.js');



//CRUD 


//Create 
router.get('/',async(req,res)=>{
    res.send("At home page");
})

router.get('/all',getAllUsers);
router.post('/register',createAccount);
router.post('/login',login);
router.delete('/delete',deleteAccount);



module.exports= router;