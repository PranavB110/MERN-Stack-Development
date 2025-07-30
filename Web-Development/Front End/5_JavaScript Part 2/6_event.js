let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

btn.addEventListener("click", changecolor);
p.addEventListener("click", changecolor);
h1.addEventListener("click", changecolor);
h3.addEventListener("click", changecolor);

function changecolor() {
    console.log(this.innerText);
    // console.dir(this.element); this print properties inside element
    this.style.backgroundColor = "blue";
}

// keyboard events
// -----------------------------------------------
let ipt = document.querySelector('input');

ipt.addEventListener('keydown', function () {
    // console.log(event);
    console.log(`code and key = ${keydown.code} and ${keydown.key}`);
    if (keydown.code == "KeyU") {
        console.log("character moves up");}
    // } else if (event.code == "KeyD") {
    //     console.log("character moves down");
    // } else if (event.code == "KeyR") {
    //     console.log("character moves right");
    // } else if (event.code == "KeyL") {
    //     console.log("character moves left");
    // } 
});