// let url='https://catfact.ninja/fact';
// let url2='https://dog.ceo/api/breeds/image/random';







const url="https://icanhazdadjoke.com/";

async function getJokes(){
    try {
        const config={
            headers:{
                Accept:"application/json"
            }
        }
        let res=await axios.get(url,config);
        console.log(res.data)
    } catch (error) {
        console.log(error);
    }
}























// let btn=document.querySelector('button');

// btn.addEventListener('click',async()=>{
//     let link=await getImage();
//     let img=document.querySelector('#result2');
//     img.setAttribute("src",link)
// })

// async function getImage(){
//     try{
//         let res=await axios.get(url2);
//         return res.data.message;
//     }
//     catch(error){
//         return "No image found";
//     }
// }









 
// let btn=document.querySelector('button');

// btn.addEventListener('click',async()=>{
//     let fact=await getFacts();
//     console.log(fact);
//     let p=document.querySelector("#result");
//     p.innerText=fact;
// })

// async function getFacts(){
//     try{
//         let res=await axios.get(url);
//         return res.data.fact;
//     }
//     catch(error){
//         return "No fact found";
//     }
// }

