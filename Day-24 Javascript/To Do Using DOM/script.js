let btn=document.querySelector('button');
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",(e)=>{
    let val=inp.value;
    let li=document.createElement("li");
    li.innerText=val;
    ul.appendChild(li);
    inp.value="";
    let btn2=document.createElement('button');
    btn2.innerText="Delete"
    btn2.classList.add("delete");
    li.appendChild(btn2);
})

ul.addEventListener("click",(event)=>{
    if(event.target.nodeName=='BUTTON'){
        let listItem=event.target.parentElement;
        listItem.remove();
    }

})




// let deleteBtns = document.querySelectorAll(".delete");

// for(deleteBtn of deleteBtns){
//     deleteBtn.addEventListener("click",()=>{
//         let par=this.parentElement;
//         par.remove(); 
//     })
// }