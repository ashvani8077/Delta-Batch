const mongoose=require('mongoose');

const localhost='mongodb://localhost:27017/books';

main()
.then((res)=>console.log(`Mongoose connected successfully with ${res}`))
.catch(err=>console.log(err));

async function main(){
    await mongoose.connect(localhost);
}

const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:100,
        max:1000
    },
})

const Book=mongoose.model('Book',bookSchema);

Book.insertOne({
    title:"RD sharma",
    author:"RD",
    price:500
})
.then((res)=>console.log(res));