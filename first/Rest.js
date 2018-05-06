//ECMA5 
function format(pattern /*,rest*/) {
    var rest = [].slice.call(arguments,1);
    console.log(rest);
    var items = rest.filter(function (x) {return x> 1});
    return pattern.replace("%v",items);
}

console.log(format("scores: %v",1,5,3));

//ECMA6
function format2(pattern,...rest) { //rest-> arrays
    let items = rest.filter(x=>{return x>1});
    return pattern.replace("%v",items);
}

console.log(format2("scores: %v",1,2,3,4,5));

let userInfo = ["John",14,21,3];
let[name,...num] =userInfo; //...은 배열값
