const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register",(req,response)=>{
    let {user,password} = req.query;
    response.send(`Standard get response. Welcome, ${user}`);
});
app.post("/register",(req,response)=>{
    let {user,password} = req.body;
    response.send(`standard post response. Welcome, ${user}`);
});


app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})