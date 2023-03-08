const express =require('express');
const router =express.Router();

const {getAllUsers,createAccount,deleteAccount}= require('../Controllers/Controllers.js');



//CRUD 


//Create 
router.get('/',async(req,res)=>{
    res.send("At home page");
})

router.get('/lol',getAllUsers);
router.post('/demo',createAccount);
router.delete('/',deleteAccount);



module.exports= router;