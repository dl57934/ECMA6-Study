/*let [x,y] = [10,20,30];

console.log(x, y);*/

let user = {name:"Ann",location:{x:10,y:20}};

let{name:n,location:{x:x,y:y}} = user;
console.log(n,x,y);