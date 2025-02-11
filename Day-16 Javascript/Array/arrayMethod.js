let a=["Ashvani"];
a.push("Sharma");
a.pop();
a.unshift("Hello");
console.log(a);
a.shift()
console.log(a);


let b=["red","green","blue"];
console.log(b.indexOf('green'));
console.log(b.includes("red"));


let c=a.concat(b);
console.log(c);
c=c.reverse();
console.log(c);
a=c.sort();
console.log(c);

