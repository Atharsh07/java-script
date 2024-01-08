// promises are used to handle asyn operations in js 
let p = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
        console.log("hi I am done")
        resolve(true);
    }, 5000);
});
console.log(p);

setTimeout(() => {
    console.log(p)
}, 10000);

// we can make multiple promises it will work in backend parally

let promise1 = new Promise((resolve, reject) => {
    setInterval(() => {
        console.log("I am second promise and i am done with you")
        resolve(true)
    }, 15000);
})
console.log(promise1);

let promise2 = new Promise((resolve, reject) => {
    setInterval(() => {
        console.log("I got a promblem")
        reject(false)
    }, 15000);
})
console.log(promise2);

