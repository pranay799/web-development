//jshint esversion:6
const express = require("express");
const bp = require("body-parser");
const app = express();
app.use(bp.urlencoded({extended:true}));


 app.get("/",function(request,response){

 	response.sendfile(__dirname +"/index.html");
 });

app.get("/about",function(request,response){

 	response.send("hellow about");
 });
 
 app.post("/",function(request,response){
   var num1 = Number(request.body.num1);
   var num2 = Number(request.body.num2);
    var result = num1 + num2;
 	response.send("thank for posting result is " + result);
 })



 app.listen(3000,function(){


  console.log("server started on port 3000")

 });
   
   