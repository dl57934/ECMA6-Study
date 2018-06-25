let fibonacci = {
    [Symbol.iterator](){
        let val = 0, nextVal=1;
        return{
            next(){
                [val, nextVal] = [nextVal, val+nextVal];
                return {done:false, value:nextVal};
            }
        }
    }
};

for (i of fibonacci){
    if (i>1000) break;
    console.log(i);
}