/*var map = new Map()
map.set("dog", "mungmung");
map.set("cat", "yaongyaong");
map.set("monkey", "UGGIGGI");

console.log(map.get("monkey"));

let set = new Set();
set.add("1");
set.add("2");
set.add("3");
set.add("4");
set.add("4");
set.add("4");
set.add("4");

for (i of set){
    console.log(i);
}

var ws = new WeakSet();*/



let Person = function () {
    let privateProps = new WeakMap();
    class Person {
        constructor(name) {
            this.name = name;// this is public
            privateProps.set(this, {age: 20}); // this is private
        }
        greet() {
            // Here we can access both name and age
            console.log(`name: ${this.name}, age: ${privateProps.get(this).age}`);
            console.log(`${privateProps.get(this).age}`);
        }
    }
    return Person;
}();
let joe = new Person('Joe');
joe.greet();
