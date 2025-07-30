console.dir(document.all[8].innerText="Peter Parker");
document.getElementById("mainImg");
let object=document.getElementById("mainImg");
// now just to change values in object command object.value="";

// getElement by class

let object2=document.getElementsByClassName("oldImg");
console.log(object2);

for(let i= 0; i < object2.length; i++) {
    object2[i]=""; // same updation for many division using class

}
// object2[2].value  ..changing prop

// query selector
console.dir(document.querySelector("p"));

let para=document.querySelector("p");
console.log(para);

console.log(para.innerText="abcd");
console.log(para.innerHTML="<b>abc<b>");

// getter and setter
console.log("-------------------------------------");

let img = document.querySelector('img');

console.log(img.getAttribute('id'));
img.setAttribute('id', 'spiderManImg');
// img.setAttribute('src',"src location") ;

// classList

let box=document.querySelector('.box');
console.log(box);
box.classList.add('bgColor');
