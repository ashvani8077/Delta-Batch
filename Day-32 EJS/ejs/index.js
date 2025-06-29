const express=require('express');
const path=require('path');
const app=express();

const port=8080;
app.set("view engine",'ejs');
app.set("views",path.join(__dirname,"views"));

app.get("/",(req,res)=>{
    res.render('home.ejs')
    console.log("Hello")
})

app.get("/hello",(req,res)=>{
    res.send("HELLO")
})

app.get("/rolldice",(req,res)=>{
    let num=Math.floor(Math.random()*6)+1
   res.render("rolldice.ejs",{num})
})

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instaData=require('./data.json');
    const data=instaData[username];
    console.log(data);
    res.render('instagram.ejs',{data});
})

app.listen(port,()=>{
    console.log(`Listening on port no ${port}`);
})