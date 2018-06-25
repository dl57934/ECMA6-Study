function f(name, age=22) {
    console.log(name + "   "+ age);
}

function f2(name, ...age){
    console.log(name+ " "+ age);
}



f("이상훈");
f2("hi", "22"," sanghoon");

function f3(name, age, height) {
    console.log(name, age, height)
}
let Info = ["이상훈", "22", 180]
f3(...Info);