const sum=function(a,b){
    return a+b;
}

const subOfSum=function(a,sum){
    return sum-a;
}

return subOfSum(a,sum(a,b));


