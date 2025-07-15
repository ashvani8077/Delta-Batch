const mongoose=require('mongoose');
const Chat=require('./models/chat')




main()
.then(()=>console.log('Connection to mongoDB success'))
.catch(err=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://localhost:27017/whatsapp')
}


let allChats=[
    {
        from: "Neha",
        to: "Priye",
        msg: "Kaha hai",
        created_at: new Date()
    },
    {
        from: "Aman",
        to: "Riya",
        msg: "Kal ka plan confirm hai?",
        created_at: new Date()
    },
    {
        from: "Ravi",
        to: "Pooja",
        msg: "Assignment bhej diya kya?",
        created_at: new Date()
    },
    {
        from: "Priya",
        to: "Ankit",
        msg: "Online aa jaldi",
        created_at: new Date()
    },
    {
        from: "Neha",
        to: "Anjali",
        msg: "Vo dress kahan se li?",
        created_at: new Date()
    },
    {
        from: "Ankit",
        to: "Priya",
        msg: "Call kar le ek baar",
        created_at: new Date()
    },
    {
        from: "Pooja",
        to: "Neha",
        msg: "Aaj movie chalna hai?",
        created_at: new Date()
    },
    {
        from: "Riya",
        to: "Aman",
        msg: "Mujhe notes bhej de",
        created_at: new Date()
    },
    {
        from: "Priye",
        to: "Neha",
        msg: "Bas 5 min me aa rahi",
        created_at: new Date()
    },
    {
        from: "Anjali",
        to: "Pooja",
        msg: "Kitne baje nikalna hai?",
        created_at: new Date()
    }
];




Chat.insertMany(allChats)
.then((res)=>console.log(res));

