function sum(a,b){
    let add=a+b;
    console.log(add);
}

sum(8,9);

function average(a, b, c) {
    let avrg = (a + b + c) / 3;
    console.log("Average:", avrg);
}

let a = parseFloat(prompt("Enter the value of a"));
let b = parseFloat(prompt("Enter the value of b"));
let c = parseFloat(prompt("Enter the value of c"));

average(a, b, c);


function table(n){
    for(let i=1;i<=10;i++){
        console.log(n*i);
    }
}

let n=prompt("Enter the number whose table to print");
table(n);