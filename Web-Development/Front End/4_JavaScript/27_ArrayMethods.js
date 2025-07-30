let arr=[1,2,3,4,5];

let k=arr.reduce( (max, el) => {
    if(el > max) {
        return el;
    }
    else {
        return max;
    }
});

console.log(k);


let mult=[10,20,3,40,50];

let n=mult.every((el)=> el % 10 == 0);
console.log(n);

let r= mult.reduce((min, a)=> {
    if(min > a) {
        return a;
    }
    else {
        return min;
    }
});

console.log(r);

console.log("---------------------------");

function min(a,b,c,d){
    console.log(arguments.length);
}

min(1,2,3,4);

function sum(a,s,d,f,g,h,k,...aged) {
    return aged.reduce((sum, el) => sum + el);
}

console.log(sum(1,2,3,4,5,6,1,1,1));