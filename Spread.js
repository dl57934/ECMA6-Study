function showUser(name, age, weight){
    return name+':'+age+weight;
}

let user = ["Alex",28,130];

console.log(showUser(...user));
console.log(showUser.apply(null,user));