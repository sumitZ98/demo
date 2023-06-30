const express = require("express");

const app = express();

app.get('/', function(req, res){        /* req is request send from client to server and res is response from the server to the client */
    res.send("hello world")
})

app.get('/sumit',function(req, res){    /* query is shown in the browser by ?id=7 */ 
    const id = req.query.id;
    res.send("<h1>hello sumit</h1> "+ id)
})

app.get('/sumit/:id',function(req, res){
    const id = req.params.id
    if(id == 1){
        res.send("hello Debs " + id)
    }
    else if(id == 2){
        res.send("hello sumit " + id)
    }
    else{
        res.send("invalid id")
    }
})

app.listen(9000, function(req, res){
    console.log("Running...")
});

