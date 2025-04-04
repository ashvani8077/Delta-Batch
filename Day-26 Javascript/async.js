async function greet(){
    console.log("Hello, World!");
    
}
greet()
.then((result)=>{
    console.log("Promise is resolved")
    console.log(result);
})
.catch((err)=>{
    console.log("Error");
})

let demo=async()=>{
    return 5;
}