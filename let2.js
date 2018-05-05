//ECMA5
var handlers = [];
for (var k = 0;k<3;k++){
    (function (x) {
        handlers[x] = function(){
            console.log(x);
        };
    })(k);
}
handlers[0]();


//ECMA6
for (let k = 0;k<3;k++){
    handlers[k] = function () {
      console.log(k);
    };
}
handlers[1]();
