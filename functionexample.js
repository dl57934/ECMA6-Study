let empty = ()=>{};

let square = (x) =>x*x;

let user;
let getUser =  ()=> user = 'dl57934';
getUser();

console.log(user);

let users =[{name:'mark',age:28},{name:'sanghoon',age:30}];
users.forEach((user,k)=>{
    if(k<2)
        console.log(user['name'],user['age']);

});

