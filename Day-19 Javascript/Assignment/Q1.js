let arr=[1,2,5,12,3,2];
function larger(arr, k){
    for(a of arr){
        if(a>k){
            return a;
        }
    }
}

console.log(larger(arr, 10));