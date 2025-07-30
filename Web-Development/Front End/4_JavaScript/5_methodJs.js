let string ="  Hello   ";
console.log(string.trim());
console.log(string.trim().toUpperCase());
console.log(string.indexOf("He"));
console.log(string.slice(2,5));
console.log(string.replace("Hel","Fel"));
console.log(string.repeat(2));

let std=["Pranav","Ganesh","Rudra","Trisha"];
std.push("Girgi");
std.push("Sahil");
console.log(std.pop());
console.log(std.unshift("Vaibhav"));
std.shift("Vaibhav");

console.log(std.includes("Pranav"));

let arr=["January","July","March","August"];
arr.splice(0,2,"June","July");

let lang=["c","c++","html","javascript","python","java","c#"];
lang.push("sql");

let k=lang.reverse().indexOf("javascript");

let mulArr=[["X",null,"O"],[null,"X","O"],[null,null,"X"]];
mulArr[0][1]="O";