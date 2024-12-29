const express=require('express');

const app=express();
const port=8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/register',(req,res)=>{
    console.log(req);
    let{user, password}=req.query;
    res.send(`Standard GET response`)
})

app.post('/register',(req,res)=>{
    console.log(req.body);
    let{user, password}=req.body;
    console.log(user);
    console.log(password);
    console.log(req.body.user);
    res.send('Standard POST response')
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})