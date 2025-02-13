const max=prompt("Enter the number");
const random=Math.floor(Math.random()*max)+1;
while(true){
    const guess=prompt("Guess the number");
    if(guess>random){
        alert("Too high");
    }
    else if(guess<random){
        alert("Too Low");
    }
    else if(guess==random){
        console.log("Correct!");
        break;
    }
    else if(guess=="quit"){
        break;
    }
}