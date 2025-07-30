console.log("hello");
console.log(123);

let a=24;
let b=23;
// let a="Total money is"+(a+b)+ "Rupees";
// console.log(a);
console.log("Total money is",(a+b),"Rupees");
console.log(`total money is ${a + b} rupees`);
let age=23;
if(age>18){
    console.log(`your age is ${age} you can vote`);
}
else{
    console.log("you cannot vote");
}

console.log('Traffic Signal');
let light="Green";
if(light=="Green"){
    console.log("you can go");
}
else if(light=="Yellow"){
    console.log("you can go slow");
}
else{
    console.log("wait");
}

let string ="good string";
if(string.length>3 && string[0]===a){
    console.log("String is good");
}
else{
    console.log("String is not good");
}


let color="yellow";

switch(color){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("go slow");
         break;
    case "green":
        console.log("go");
        break; 
    default:
        console.log("Light is broken");               
}

let day=1;

switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
         break;
    case 3:
        console.log("Tuesday");
        break; 
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;  
    default:
        console.log("Day not Found");               
}

alert("Danger");
console.log("this is a simple log");
console.error("this is a simple log");
console.warn("this is a simple log");

let name=prompt("Enter your roll no:");
console.log(name);
alert(name);

let userName=prompt("Enter your Name");
let userAge=prompt("Entre your age");
alert(`${userName} is ${userAge} years old.`);

let Quarter=1;

switch (Quarter){
    case 1:
        console.log("January,February,March");
        break;
    case 2:
        console.log("April,May,June");
        break;
    case 3:
        console.log("July,Agust,September");
        break;
    case 4:
        console.log("October,November,December");
        break;
    default:
        console.log("Nothing");   
}

const year=2025;
console.log(year);
   