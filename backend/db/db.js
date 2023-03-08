const mongoose = require("mongoose");

const DB = process.env.DATABASE;


mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>
{console.log("Db Connected")}
).catch((err)=> {console.log("connection failed due to -:",err)});


