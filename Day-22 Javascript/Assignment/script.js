let body = document.body;
let button=document.createElement('button');
let input=document.createElement('input');
button.innerText="click me";

body.appendChild(input);
body.appendChild(button);

button.setAttribute("placeholder","username");
button.setAttribute("id",'btn')

let btn=document.querySelector('#btn');
btn.style.color='white';
btn.style.backgroundColor='red'

let h1=document.createElement('h1');
h1.innerText="DOM Practice";
h1.style.textDecoration='underline';
h1.style.color='purple';
body.appendChild(h1);

let p=document.createElement('p');
p.innerHTML="Apna college <b> DELTA PRACTICE</b>";
body.appendChild(p);