let body = document.querySelector('body');

let p = document.createElement('p');
p.innerText="Hey Hey I'm red!";

p.append("Hey I'm red!");
p.setAttribute('style', "color: red");

// 2
let h3 = document.createElement('h3');
body.append(h3);

h3.append("I'm a blue h3!");
h3.setAttribute('style',"color:blue");

// 3
let div = document.createElement('div');
body.appendChild(div);

div.setAttribute("style", "border: solid black; background-color: pink")

let h1 = document.createElement('h1');
div.appendChild(h1);

h1.append("I'm in a div");

let p2 = document.createElement('p');
div.appendChild(p2);

p2.append("ME TOO!");