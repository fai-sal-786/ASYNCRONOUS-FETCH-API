// Asyncronous function/APIS
// setTimeout
// fetch
// PROMISES

// var a = "A";
// var b = "B";

// setTimeout(() => {
    // console.log(b);
// }, 2000);

// console.log(a);

/*CALLBACK*/
// function sum(a, b, c) {
    // console.log("a=>", a);
    // console.log("b=>", b);
    // console.log("c=>", c());
// }
// sum(10, 20, () => {
    // return "a + b";
// });

// function login(CALLBACK) {
//     setTimeout(() => {
//         console.log("user is logged inn");
//         CALLBACK();
//     }, 1000);
// }

// function getUserInfo() {
//     const user = {
//         fullName: "Faisal Ali",
//     };
//     setTimeout(() => {
//         console.log("user Data is here", user);  
//     }, 500);   
// } 
// login(getUserInfo);

//  var isValid = false;
// const p = new Promise((resolve, reject) => {
    // if (isValid) {
        // resolve("user is logged in");
    // } else {
        // reject("user email/password is  not valid.");
    // }
// });

// p.then((msg) => console.log(msg))
// .catch((err) => console.log("catch=>", err));

var products = [];
fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then((data) => displayproducts(data));

function displayproducts(products) {
    console.log("products=>", products);
    var list = document.getElementById('list');

    products.forEach((data   ,ind) => {
        let ele = `<li>${data.id} ${data.title} ${data.category} ${data.price} ${data.image} </li>`;       
        list.innerHTML += ele;
    });    
}
