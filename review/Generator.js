// 완전히 새로운 기능
// Generator는 함수 처리안의 임의의 장소에서 처리를 중단
// 재개할 수 있는 구조를 제공하는 것입니다.
//Generator Promise를 같이 사용하면 동기식 코드로 변환 가능
/*let co = require('co');

function sleep2(mesc){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,mesc);
    });
}

co(function *() {
    console.log('sleep .....');
    yield sleep2(1000);
    console.log('wake!');
});

function* foo(){
    var index = 0;
    while(index <=2)
       yield index++;

}
console.log(foo())
console.log(foo().next());*/

/*
function* gfn1(no)
{
    yield no + 1;
    yield no + 2;
    yield no + 3;
}

function* gfn2(no)
{
    var tmp = gfn1(no);
    for (val of tmp)
    {
        yield val;
    }

    yield no + 100;
}

var gen = gfn2(100);

for (val of gen)
{
    console.log(val);
}
*/


function* infinite_gfn()
{
    var msg = 0;
    while (true)
    {
        yield msg ++ ;
    }
}

var gen = infinite_gfn();
for (let i= 0 ; i<5;i++) {
    var val = gen.next().value;
// val의 값음 은 무었일까?
    console.log('val의 값은 ' + val + ' 이다.');
}
/*function* infinite_gfn() {
    var seq = 0;
    while (true) {
        yield seq++;
    }
}

var gen = infinite_gfn();

for (var i = 0 ; i < 5 ; i++)
{
    console.log(gen.next().value);
}*/