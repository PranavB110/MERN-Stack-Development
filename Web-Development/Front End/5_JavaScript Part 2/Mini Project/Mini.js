let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let del = document.querySelectorAll(".delete")

btn.addEventListener("click", function () {
     let item = document.createElement("li");
     let newbtn = document.createElement("button");
     newbtn.innerText = "delete";
     item.innerText = input.value;
     ul.appendChild(item);
     item.appendChild(newbtn);
     input.value = "";
});

//take help of parent ul element to delete child li element
ul.addEventListener("click", function (event) {
    console.log(event.target);
    console.dir(event.target);
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});


//we cannot remove newly added list or not able to apply addeventlisterner
// for (ele of del) {
//     ele.addEventListener("click", function () {
//        let par = this.parentElement;
//        par.remove();
//     });
// }

