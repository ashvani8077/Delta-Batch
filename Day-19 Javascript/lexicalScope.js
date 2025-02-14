function sum(a,b){
    let c=a+b;
    return sum2(a,c)
    function sum2(a,c){
        return a+c;
    }
}
console.log(sum(2,3));