const express = require("express");
const app = express();

let port = 3000;

app.use((req,res)=>{
    console.log("request recieved");
    res.send("this is a basic response");
});

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}` );
});