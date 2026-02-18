const express = require("express");
const app = express();
const port = 3000;

app.get("/register",(req,response)=>{
    let {user,password} = req.query;
    response.send(`Standard get response. Welcome, ${user}`);
});
app.post("/register",(req,response)=>{
    response.send("standard post response");
});


app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})