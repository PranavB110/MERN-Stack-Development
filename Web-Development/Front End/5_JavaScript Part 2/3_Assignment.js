let body = document.querySelector('body');

let input = document.createElement('input');
body.append(input);
input.setAttribute('placeholder', "Username");


let btn = document.createElement("button");
body.append(btn);
btn.setAttribute('id', "btn");

btn.innerText = "Click Me!";

// 3
let btnS = document.querySelector('btn');
btn.classList.add("btnStyle");

//4
let h1 = document.createElement('h1');
document.querySelector('body').append(h1);
h1.innerText = "DOM Practice!";

h1.setAttribute("id", "cng");

// 5
let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta<b> Practice";
document.querySelector('body').append(p);