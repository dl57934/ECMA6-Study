let map = {}
let a = Symbol('a');
console.log(a);

map[a] = "abc"
map["b"] = "bbb"

console.log(map[a]);
console.log(map["b"]);

for (let key in map){
    console.log(key);
}

Object.keys(map);