let btn=document.querySelector('button')

btn.addEventListener("click",(e)=>{
    console.log(e)
})

let inp=document.querySelector('input');

inp.addEventListener("keydown",(e)=>{
    console.log("key was pressed");
    console.log(e.key)
})