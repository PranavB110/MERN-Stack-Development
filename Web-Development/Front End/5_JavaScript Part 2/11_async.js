async function greet() {
    // throw "some random error";
    return "Hello";
}

greet()
.then((result) => {
    console.log("promise was resolved:", result);
})
.catch((err) => {
    console .log("rejected with err:", err);
})

//making arrow fn async
let demo = async () => {
    return 5;
};

demo()
.then((result) => {
   console.log(demo());
})