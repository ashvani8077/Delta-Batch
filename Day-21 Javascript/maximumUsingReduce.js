let arr=[1,2,3,4,3,62,2,54,24,54,24];

let max=-1;
arr.reduce((max,el)=>{
    if(max>el){
        return max;
    }
    else{
        return el;
    }
})