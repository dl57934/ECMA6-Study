new Promise((resolve, reject) => {
    resolve("abcd");
}).then((result)=>{
    console.log(result);
});

function f() {
    return "sanghoon";
}

function f1(name) {
    return "hi "+name;
}

new Promise(function(resolve, reject){
    resolve(f);
}).then(f1()).then(result => {
    console.log(result);
}).catch(err=>{
    console.log("err: "+err)
});


