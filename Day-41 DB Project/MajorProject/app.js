const express=require('express');
const app=express();
const mongoose=require('mongoose');
const Listing=require('./models/listing')
const path=require('path');
const methodOverride=require('method-override');


const MONGO_URL='mongodb://localhost:27017/wanderlust';


main()
.then(()=>console.log('Connected to DB'))
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"))


app.get('/',(req,res)=>{
    res.send(`Hii i am root`);
})

// app.get('/testListing',async(req,res)=>{
//     let sampleListing=new Listing({
//         title:"My new villa",
//         description:"Near mathura",
//         price:1000,
//         location:"Mathura",
//         country:"India"
//     })
//     await sampleListing.save()
//     .then((res)=>console.log('successful data saved'))
//     .catch((err)=>console.log(err));
//     res.send("Successful Listed")
// })


app.get('/listings',async (req,res)=>{
    const allListings=await Listing.find({});
    res.render("listings/index.ejs",{allListings});
})



//new route
app.get('/listings/new',async(req,res)=>{
    res.render('listings/new.ejs')
})

//post listings
app.post('/listings',async(req,res)=>{
   const newListing= new Listing(req.body.listing);
   await newListing.save();
   res.redirect('/listings');
})

//edit route
app.get('/listings/:id/edit',async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render('listings/edit.ejs',{listing})
})

//update route
app.put('/listings/:id',async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect('/listings');
})

//delete
app.delete('/listings/:id',async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect('/listings')
})

app.get('/listings/:id',async(req,res)=>{
    let {id}=req.params
    const listing=await Listing.findById(id);
    res.render('listings/show.ejs',{listing})
})





app.listen(8080,()=>{
    console.log(`Server is running on PORT 8080`);
})