// let url = "https://icanhazdadjoke.com/";

// async function getJoke() {
//     try {
//         const config = {headers: {Accept: "application/json"}};
//         let result = await axios.get(url, config);
//         console.log(result.data.joke);
//     } catch (err) {
//         console.log("Error-", err);
//     }
// }

// getJoke();

//--------------------------------------------------------
//get colleges by country and show on browser

// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");
// let input = document.querySelector("input");
// let list = document.querySelector("#list");

// btn.addEventListener("click", async () => {
//     let country = input.value;
//     input.value = "";

//     let colArr = await getColleges(country); 
//     show(colArr);
// });

// function show(colArr) {

//     list.innerText = "";

//     for (col of colArr) {
//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }

// async function getColleges(country) {
//     try {
//         let res = await axios.get(url + country);
//         return res.data;
//     } catch (err) {
//         console.log("error :", err);
//         return [];
//     }
// }

//---------------------------------------------------------
//state wise data

let url = "http://universities.hipolabs.com/search?name=India&state-province=";
let btn = document.querySelector("button");
let input = document.querySelector("input");
let list = document.querySelector("#list");

btn.addEventListener("click", async () => {
    let state = input.value;
    input.value = "";

    let colArr = await getColleges(state); 
    show(colArr);
});

function show(colArr) {

    list.innerText = "";

    for (col of colArr) {
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

let country = "India";

async function getColleges(country) {
    try {
        let res = await axios.get(url + country + );
        return res.data;
    } catch (err) {
        console.log("error :", err);
        return [];
    }
}