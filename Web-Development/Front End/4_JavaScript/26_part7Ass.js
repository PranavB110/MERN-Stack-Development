const arrayAverage=(arr)=> {
    let sum=0;
    for(let i=0; i < arr.length; i++) {
        sum=sum + arr[i];
    }
    return sum;
}

let arr= [1,2,3,4,5,6,5,78];
console.log(arrayAverage(arr));

const isEven=(n) => {
    if(n%2 == 0) {
        console.log(`${n} is even number.`)
    }
    else {
        console.log(`${n} is odd number.`)
    }
}

console.log(isEven(2));

const object={
    message:'Hello,World!',
    logMessage() {
        console.log(this.message);
        console.log(this);
    }
    };

setTimeout(object.logMessage,1000);