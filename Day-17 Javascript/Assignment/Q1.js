let arr=[1,2,3,4,5,6,2,3];
let n=2;
for(var i=0;i<arr.length;i++){
    if(arr[i]==n){
        arr.splice(i,1);
    }
}