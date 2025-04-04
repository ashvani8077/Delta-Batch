let url='https://catfact.ninja/fact';

fetch(url)
.then((response)=>{
    console.log(response);
    response.json().then((data)=>{
        console.log(data);
    })
})
.catch((error)=>{
    console.log(error);
})