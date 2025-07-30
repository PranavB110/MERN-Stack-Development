// let url = "https://catfact.ninja/fact";

//USING PROMISE

// fetch(url)  //print this you will know more
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log("data1 =", data.fact);
//     return fetch(url);  //new api req
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log("data2 =", data.fact);
//   })
//   .catch((err) => {
//     console.log("Error -", err);
//   });

//-----------------------------------------------------
//USING ASYNC AND AWAIT

// async function getFacts() {
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);
  
//     let res2 = await fetch(url);
//     let data2 = await res2.json();
//     console.log(data2.fact);
//   } catch (err) {
//     console.log("error- ", err);
//   }

//   console.log("HELLO!!");
// }

// getFacts();

//---------------------------------------------------------

//USING AXIOS to display fact

// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let result = await getFacts();
//     console.log(result);
//     para.innerText = result;
// })

// async function getFacts() {
//   try {
//     let res = await axios.get(url);
//     return res.data.fact;
  
//   } catch (err) {
//     console.log("error- ", err);
//   }
// }

// -------------------------------------------------------------
//to display img

let url = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");
let img = document.querySelector("img");

//why we use async here ....bcz getimg is async it returns promise when called but if we use await
//in 'let result= ...' it will wait until promise is resolved and value is return not the promise
btn.addEventListener("click", async () => {
    let result = await getImg();
    console.log(result);
    img.setAttribute("src", result);
})

async function getImg() {
  try {
    let res = await axios.get(url);
     return res.data.message;
  
  } catch (err) {
    console.log("error- ", err);
  }
}





