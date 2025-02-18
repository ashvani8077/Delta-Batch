let btn=document.querySelector('button');
let r1;
let r2;
let r3;
let random=()=>{
    r1=Math.floor(Math.random()*255)+1;
    r2=Math.floor(Math.random()*255)+1;
    r3=Math.floor(Math.random()*255)+1;
    let box=document.querySelector('.box');
    box.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
    let h1=document.querySelector('h1');
    h1.innerText=`Color is rgba(${r1},${r2},${r3})`
}
btn.addEventListener('click',random)
