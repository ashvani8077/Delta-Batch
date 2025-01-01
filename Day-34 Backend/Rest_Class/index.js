const express=require('express');
const app=express();
const path=require('path');
const port=8080;

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    { id: "1a", username: "apnacollege", content: "I love coding" },
    { id: "2b", username: "codewithharry", content: "JavaScript is awesome!" },
    { id: "3c", username: "techgirl", content: "Building my portfolio with React 🚀" },
    { id: "4d", username: "dev_dude", content: "Just deployed my backend on Render!" },
    { id: "5e", username: "frontendfan", content: "CSS Grid vs Flexbox? Still confused 😅" },
    { id: "6f", username: "backendboss", content: "Express + MongoDB = ❤️" },
    { id: "7g", username: "coderlife", content: "Today's leetcode streak: 60 days!" },
    { id: "8h", username: "debugqueen", content: "Finally fixed that one bug after 5 hours 😤" },
    { id: "9i", username: "gpt_guru", content: "AI will change the world!" },
    { id: "10j", username: "ashvani", content: "Learning Node.js and loving it!" }
];



//GET ALL POST DATA
app.get('/posts',(req,res)=>{
    res.render('index.ejs',{posts});
})

//post 
app.get('/post/new',(req,res)=>{
    res.render('new.ejs')
})

app.post('/posts', (req, res) => {
    let { username, content } = req.body;
    posts.push({ username, content });
    res.redirect('/posts');
});

app.get('/posts/:id',(req,res)=>{
    let{id}=req.params;
    console.log(id);
    let post=posts.find((p)=>id==p.id);
    console.log(post);
    res.send("req workds");
})



app.listen(port,()=>{
    console.log("listening on port 8080")
});