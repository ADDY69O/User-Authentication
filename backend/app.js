const express =require('express');
const dotenv = require('dotenv');
const bodyParser=require('body-parser');
const cors=require('cors');

const app =express();

app.use(cors());

app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.urlencoded());
dotenv.config({path:'./config.env'})
require('./db/db.js')


app.use(require('./routes/routes'));


const PORT= process.env.PORT ;



// app.use('/user',userRoutes);

app.get("/demo",(req,res)=>{
    res.send("Demo page");
})





app.listen(PORT,(req,res)=>{
    console.log("Listening on port ",PORT);
})

