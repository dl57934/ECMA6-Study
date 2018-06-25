class bigBrother{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    myAge(){
        return [this.name, this.age];
    }
}

class youngerBrother extends bigBrother{

    constructor(name, age){
         super("이승훈", 27);
        this.brName = "", this.brAge = 0;
         [this.brName, this.brAge] =  super.myAge();
         this.name = name;
         this.age = age;
     }
     myAge(){
         console.log('형의 이름은' +this.brName+ "이구 저의 이름은 "+this.name+"입니다.\n" +
             '형의 나이는'+ this.brAge+"이구요. 저의 나이는 " +this.age+" 입니다."+
             '저희 둘의 나이 차이는 ' + (this.brAge - this.age).toString() +'입니다.')
     }
}

let myInfo = new youngerBrother("이상훈", 22);
myInfo.myAge();