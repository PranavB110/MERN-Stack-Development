// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() *10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// savetoDb("Apna college", 
//     () => {
//         console.log("success1: your data 1 was saved");
//         savetoDb("Pranav Bhakare",
//             () => {
//                 console.log("success2: your data 2 was saved");   
//                 savetoDb("Sigma 6.O",
//                     () => {
//                         console.log("success3: your data 3 was saved");
//                     },
//                     () => {
//                         console.log("failure3: connection weak");
//                     }
//                 );
//             },
//             () => {
//                 console.log("failure2: connection weak");
//             }
//         );
//     },
//     () => {
//         console.log("failure1: connection weak");
//     }
// );

//Solution Promise

function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success : data was saved");
        } else {
            reject("failure : weak connection");
        }
    }); 
}
//not good format
// let request = savetoDb("Apna College"); //request = promise (storing in request variable)
// request.then(() => {
//     console.log("promise was resolved");
//     console.log(request);
// }) .catch(() => {
//     console.log("promise was rejected");
//     console.log(request);
// });
//---------------------------------------------
//Optimised format
// savetoDb("Apna College")
//   .then(() => {
//     console.log("promise was resolved");
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//   });
//---------------------------------------------
//solution of call back hell
// savetoDb("Apna College")
//   .then(() => {
//     console.log("promise was resolved");
//     savetoDb("Pranav Bhakare")
//     .then(() => {
//         console.log("promise was resolved");
//     })
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//   });
//--------------------------------------------------
//Final Solution
savetoDb("Apna College")
  .then((result) => {
    console.log("promise was resolved");
    console.log("result of promise: ", result);
    return savetoDb("Sigma 6.O");   //return to next then
  })
  .then((result) => {    //receieved
    console.log("promise was resolved");
    console.log("result of promise: ", result);
    return savetoDb("Pranav Bhakare");  //return to next then
  })
  .then((res) => {    //received
    console.log("promise was resolved");
    console.log("result of promise: ", res);
  })
  .catch((lr) => {
    console.log("promise was rejected");
    console.log("error of promise: ", lr);
  });

// many (try) or (then) and only one (catch) required or sufficient