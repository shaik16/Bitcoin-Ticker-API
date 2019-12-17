const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000,function(){
console.log("server started on thr port 3000")
})

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})

app.post("/",function(req,res){
    request("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD",function(error,response,body){
        var data=JSON.parse(body);
        var price=data.last;
        res.send("<h1>the current price of btc is "+price+" USD</h1>") 
    })
})
