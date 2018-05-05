function page(config) {
    var title = config['title'];
    var [x,y] = config['pos'];
    console.log(title+x+y);
}

new page({title:'dl57934',pos:[1,2]});

let x = 10,y=20;

[x,y] = [y,x];

console.log(x,y);