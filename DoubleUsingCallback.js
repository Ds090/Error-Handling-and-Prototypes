function arrDouble(x,newFun) {
    let doubleArr = x.map((num) => {
        return newFun(num);
    })
    return doubleArr;
}

let arr = [2,3,4,5];


function newFun(n) {
   return n * 2;
}

console.log(arrDouble(arr,newFun));