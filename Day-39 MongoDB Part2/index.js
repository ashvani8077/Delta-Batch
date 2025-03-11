const mongoose=require('mongoose');

const localhost='mongodb://localhost:27017/learning';


main()
.then((res)=>console.log(`Mongoose connected successfully with ${res}`))
.catch(err=>console.log(err));

async function main(){
    await mongoose.connect(localhost);
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});
 const User=mongoose.model('User',userSchema);
// const Employee=mongoose.model('Employee',userSchema);

// const user1=new User({name:"Ashvani",email:"ashvani@gmail.com",age:22});
// const user2=new User({name:"Sudhanshu",email:"sudhanshu@gmail.com",age:20});


// user1.save();
// user2.save();



// User.insertMany([
//     {name:"Ashu",email:"ashu@gmail.com",age:23},
//     {name:"Yuvraj",email:"yuvraj@gmail.com",age:43},
//     {name:"Alok",email:"alok@gmail.com",age:26},
// ])
// .then((res)=>{
//     console.log(`Data added => ${res}`)
// })
// .catch(err=>console.log(`error occurd ${err}`));



// User.findOne({age:23})
// .then((res)=>{
//     console.log(res)
// })
// .catch(err=>console.log(err));



// User.findOne({age:{$gt:23}})
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));


// User.updateOne({age:23},{name:"Rampal"})
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));