let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "purple"];

let h2 = document.querySelector("h2");
let btn = document.querySelector("buttons");

let started = false;
let level = 0;

document.addEventListener("keypress", function () {
    if (started == false) {
        alert("Game has started");
        started = true;

        levelUp();
    }
});

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    let randomIndx = Math.floor(Math.random() *3);
    let randColor = btns[randomIndx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function btnPress() {
    // console.log(this);  //this is btn we have press
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    seqMatch(userSeq.length - 1);
}

function seqMatch(idx) {
    // console.log(`current level is ${level}`);   //level no == size of user,game seq
    // let idx = level - 1; 

    if (userSeq[idx] === gameSeq[idx]) {
        // console.log("same values");
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over your score was <b>${level}<b>! Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}