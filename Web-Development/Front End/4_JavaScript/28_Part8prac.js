let arr=[1,2,3,4,5];

let Squaresum=(arr) => {

    let squareSum=0;

    for(let i=0; i< arr.length; i++) {
         squareSum= squareSum + arr[i]*arr[i];

    }
    return squareSum;
      
}
//2 ------------------------------------------------- 

let num=[1,2,3,4,5];

let newNum= num.map((el) => {
    return el + 5;

});

console.log(Squaresum(arr));
console.log(newNum);

//3 -----------------------------------------------
 let word= ["A","b","C","d","e","F"];
 
 let newWord= word.map((el) => el.toUpperCase());

 console.log(newWord);

//4  ---------------------------------------------------
let k= [1,2,3,4,5];

const doubleAndReturnArgs = (arr,...arg) => [
    ...arr,...arg.map((v) => v*2)
];

console.log(doubleAndReturnArgs(k,4,4));

//5 ------------------------------------------------------
let one= {
    he: "Pranav",
    age: 20,
    city: "Pune"
}

let two= {
    she: "Trisha",
    aged: 19,
    citi: "Shirur"
}

let mergeObject= {...one, ...two};
console.log(mergeObject);