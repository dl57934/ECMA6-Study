//ES5
function loop(func,count){
    count = count || 3;
    for (var i = 0; i <count;i++)
        func();
}

function add(){
    var result = 0;
    for (var i = 0; i<arguments.length;i++){
        result += arguments[i];
    }
    return result;
}

loop(()=>{console.log('hello')});
console.log(add(1,2,3,4,5,6));



//ES6
function loop2(func,count){
    count = count||3;
    for(let i = 0;i<count;i++)
        func();
}


loop2(()=>{console.log('hi')});
let add2 = (...data) =>{
    let result = 0;
    for (let i = 0;i<data.length;i++){
        result = data[i];
    }
    return result;
}

console.log(add(1,2,3,4,5,6,7,8,9,10));
