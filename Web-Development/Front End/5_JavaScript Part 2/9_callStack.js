let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000);
//         })
//     })
// });

// //callback nesting -> callback hell
//------------------------------------------------------------

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random()*5) + 1;
            if(num > 3) {
                reject("Promise was rejected");
            }
            
            h1.style.color = color;
            resolve("color changed!");
        }, delay);
    });
}
//---------------------------------------
//using promise methods then catch
// changeColor("red", 1000)
// .then(() => {
//     console.log("red color was completed");
//     return changeColor("orange", 1000);
// })
// .then(() => {
//     console.log("orange color was completed");
//     return changeColor("yellow", 1000);
// })
// .then(() => {
//     console.log("yellow color was completed");
// })
// .catch(() => {
//     console.log("Rejected");
// })

//-----------------------------------------
//using async and await

async function color() {
    try {
        await changeColor("red", 1000);
        await changeColor("green", 1000);
        await  changeColor("orange", 1000);
        changeColor("purple", 1000);
    } catch (err) {
        console.log("error catched as: ",err);
    }

    let a = 5;
    console.log(a);
    console.log("addition is:", a + 3);

}

color();