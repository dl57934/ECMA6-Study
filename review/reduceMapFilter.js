let data =[1,2,3];
let initalValue = [];
//
//reduce - > (호출 할 때 두번째 인자의 초기값, 호출한 배열의 데이터)
//
let reducer = (accumulator,value) =>{
    accumulator.push(value * 2);
    return accumulator;
};

//같은 의미의 코드

//reduce 사용하기
let result = data.reduce(reducer,[]);
console.log('result Test');
console.log(result);


//map
let result2 = data.map((x)=>x*x);
console.log('map Test');
console.log(result2);


let reducer2 = (accumulator2, value) => {
    if(value%2 == 0){
        accumulator2.push(value);
    }
    return accumulator2;
}

let data2 = [1,2,3,4,5,6,7,8];
let result3 = data2.reduce(reducer2,[]);
console.log('reduceTest 2');
console.log(result3);


result3 = data2.filter(x => x%2==0);
console.log('filter Test');
console.log(result3);



let reducer3 = (accumulator3, value)=>{
    if(value%2 == 0){
        accumulator3.push(value*value);
    }
    return accumulator3;
}
let result4 = data2.reduce(reducer3,[]);
console.log('reducer3');
console.log(result4);


result4 = data2.filter(x => x%2 ==0 ).map(x => x *x);
console.log('map and filter');
console.log(result4);

