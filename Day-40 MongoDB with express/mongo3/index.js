const express=require('express');
const mongoose=require('mongoose');
const path=require('path');

const Chat=require('./models/chat')


const app=express();

app.set('views', path.join(__dirname, "views")); 
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}));



main()
.then(()=>console.log('Connection to mongoDB success'))
.catch(err=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://localhost:27017/whatsapp')
}

//index route
app.get('/chats',async(req,res)=>{
    let chats=await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});

})

//new chat
app.get('/chats/new',async(req,res)=>{

    res.render("new.ejs")
});

//create route

app.post('/chats',(req,res)=>{
    let {from, to, msg}=req.body;
    let newChat=new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    });
    newChat.save()
    .then((res)=>{
        console.log('Chat saved')
    })
    .catch((err)=>console.log(err))
    res.redirect('/chats')
})



app.get('/',(req,res)=>{
    console.log("root is working");
    res.send('Route is working')
})

app.listen(8080,()=>{
    console.log('Server is listening on PORT 8080')
})