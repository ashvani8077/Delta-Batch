let form=document.querySelector('form');
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let inp=document.querySelector('input');
    console.log(inp.value);
})