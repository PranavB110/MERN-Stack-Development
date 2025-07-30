// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault(); //to stop redirecting
//     alert("form is submitted");

// });

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); //to stop redirecting

    //downside part is becoming bulky 
    // let user = document.querySelector('#user'); 
    // console.log(user.value);

    //short trick
    let user = form.elements[0];
    let pass = this.elements[1];

    console.log(user.value);
    console.log(pass.value);

});

let inp = document.querySelector("#text");
let p = document.querySelector("p");
inp.addEventListener("input", function () {
    console.log(inp.value);
    p.innerText=inp.value;

})
