//ES5

function sleep(callback, mesc) {
    setTimeout(callback,mesc);
}

sleep(function () {
    console.log('wake!');
},1000);

//ES6

function sleep2(mesc){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,mesc);
    });
}

sleep2(1000).then(()=>{
    console.log('wake');
})




