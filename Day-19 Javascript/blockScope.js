let a=10        //Global value
{
    let a= 18;  //Block value
    console.log(`Block Scope print ${a}`)
}


console.log(a);


//Different value for both global and block scope