let p1 = new Promise((resolve, reject) => {
    alert("hey i am the promblem")
    setTimeout(() => {
        resolve(1)
    }, 2000);   
})
p1.then(() => {
    console.log("the promise has been resolved")
})

p1.then(() => {
    alert("hurray");
})