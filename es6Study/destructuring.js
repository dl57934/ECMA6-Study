var [a, ,b] = [1,2,3];

function g({name:x}){
    console.log(x)
}

g({name:5})

var [a] = [];

var [a=1]=[]
console.log(a)