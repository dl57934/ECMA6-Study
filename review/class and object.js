class User{
    constructor(name){
        this.name = name;
    }
    say(){
        return 'my name is ' +this.name;
    }
}


class Admin extends User{
    constructor(name,age){
        super(name);
        this.age = age;
    }
    say(){
        return super.say() +' age: '+ this.age;
    }
}

let user = new User('이상훈');
let admin = new Admin('이상훈',22);
console.log('부모 클래스 user: '+user.say());
console.log('자식 클래스 admin: '+admin.say());