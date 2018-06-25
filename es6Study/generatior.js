const fibo = {
    [Symbol.iterator] : function *(){
        let val = 0, cur = 1;
            while(true){
            [val, cur] = [cur, cur + val];
            yield cur;
        }
    }
};

for (i of fibo){
    if (i>2000) break;
    console.log(i);
}

const generatorTest = function *() {
  yield 4;
  yield [1, 2, 3, 4];
  yield {a:"a", b:"b"};
  yield *(function *() {yield 7, yield 8})();
  yield function *() {yield 8, yield 9};
};
const b = generatorTest();
console.log(b.next());
console.log(b.next());
console.log(b.next());
console.log(b.next().value);
console.log(b.next().value);
const a = b.next().value;
console.log(a.next().value);
console.log(a.next().value);