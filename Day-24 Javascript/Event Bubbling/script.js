let div=document.querySelector("div");

let ul=document.querySelector("ul");

let lis=document.querySelector("li");

div.addEventListener("click",()=>{
    console.log("div was clicked")
})

ul.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("Li was clicked")
})