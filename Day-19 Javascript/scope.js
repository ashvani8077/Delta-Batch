//Function Scope
function calSum(a,b){
    let sum=a+b;
    return sum;
}

//Global Scope
let sum=calSum(32,24)
console.log(sum)