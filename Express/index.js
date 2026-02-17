const express = require("express");
const app = express();

let port = 3000;

//handling requests and sending response
// app.use((req,res)=>{
//     console.log("request recieved");
//     res.send("this is a basic response");
// });

//routing
app.get("/",(req,res)=>{ //route path
    res.send("You contaced root path");
});

app.get("/apple",(req,res)=>{ //if user enters, localhost:3000/apple, it'll work.
    res.send("you contacted apple path");
});

app.get("/orange",(req,res)=>{
    res.send("you contacted orange path.");
});

app.post("/",(req,res)=>{
    res.send("post request is made");
});

//path parameters
app.get("/:username/:id", (req, res) => { //it expects two parameters, passing only one parameter won't work.
    let {username, id} = req.params;
    let htmlstr = `<h1>I'm passing html content now.</h1>`;
    res.send(htmlstr);
    res.send(`Welcome to path parameter with an example of @${username}.`); //we can send only one response for one request, so this response won't work.
});

//query search
app.get("/search",(req,res)=>{
    let {q} = req.query;
    if(!q){
        res.send('<h1>No query searched</h1>');
    }
    res.send(`<h1>Searched query: ${q}</h1>`); //for http://localhost:3000/search?q=apple, it'll give "Searched query: apple"
})

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}` );
});