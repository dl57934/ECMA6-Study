var x = 21;
function f(){
        if(true){
            console.log(x);
            x= 71;
        }
    console.log(x);
}

function f2(){
    let x = 31;
    if(true){
        console.log(x);
        x= 71;
    }
    console.log(x);
}
f()
f2()