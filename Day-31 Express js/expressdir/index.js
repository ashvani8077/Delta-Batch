const express=require('express');
const app=express();


let port=3000;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})

// app.use((req,res)=>{
//     console.log("request received");
//     res.send("<h1>Hello did you able to see it is written inside a heading</h1>");
// });

app.get('/ashu',(req,res)=>{
    console.log('req received on ashu');
    res.send("<h1>Ashu</h1>")
})

app.get('/yash',(req,res)=>{
    console.log('req received on yash');
    res.send("<h1>Yash</h1>")
})

app.get('/ashvani',(req,res)=>{
    console.log('req received on ashvani');
    res.send("<h1>Ashvani</h1>")
})

// app.get('*',(req,res)=>{
//     console.log("This is the universal path");
//     res.send("<h1>You are trying to access the invalid route.</h1>")
// })