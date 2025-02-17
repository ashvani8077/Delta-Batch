let body = document.getElementsByTagName("body")[0]; 


let p=document.createElement('p');
p.innerText="hey i am a red paragraph";
body.appendChild(p);
p.style.color='red';

let h3=document.createElement('h3');
h3.innerHTML='<i>I am a blue h3!</i>';
body.appendChild(h3);
h3.style.color='blue';

let div=document.createElement('div');
div.classList.add('divClass')
body.appendChild(div);

let h1=document.createElement('h1');
h1.innerText="I am in div";
div.appendChild(h1);

let p2=document.createElement('p');
p2.innerText='Mee too';
div.appendChild(p2);