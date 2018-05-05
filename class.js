class User{
    constructor(name){
        this.name = name;
    }
    say(){
        return '내 이름은 '+this.name;
    }
}

class Admin extends User{
   constructor(name,age){
       super(name);
       this.age = age;

   }
   say(){
       return '너의 이름은 '+super.say()+' 나이는 ' +this.age;
   }
}

let user = new User('이상훈');
let Admin2 = new Admin('이상훈',22);
console.log(user.say());
console.log(Admin2.say());