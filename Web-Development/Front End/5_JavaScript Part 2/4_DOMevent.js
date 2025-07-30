let btns = document.querySelectorAll("button");

// let k = function() {
//     alert("button was clicked");
// };

// btns.onclick = k;

for (btn of btns) {
    // btn.onclick = sayHello;   //only once
    // btn.onmouseenter = function () {
    //     console.log("you entered a button")};
     
    btn.addEventListener('dblclick', sayHello);  //can create many times
    // btn.addEventListener('click', function () {
    //     console.log("button was click");
    // });    
    // btn.addEventListener('click', function () {
    //     alert("button was click");
    // });   
    };


function sayHello() {
    alert("Hello!");
}

let p = document.querySelector('p');

p.addEventListener("click", function() {
    console.log("para was clicked");

});

let box = document.querySelector('.box');
box.addEventListener('mouseenter', function () {
    console.log("mouse inside div");
});

