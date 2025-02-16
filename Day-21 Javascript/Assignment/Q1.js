let num=[1,2,3,4,6,7];
const square=num.map((num)=>num*num);
let sum=square.reduce((acc,curr)=>acc+curr,0);
let avg=sum/num.length;