let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("resolve after two seconds" )
        resolve(56);
    }, 2000);    
})

p1.then((value) => {
    console.log(value)
    return  p2 = new Promise((resolve, reject) => {
        setTimeout(() => {resolve("promise 2")}, 2000)
    })
}).then((value) => {
    console.log("we are done")
    return 2
}).then((value) => {
    console.log(value);
    console.log("we are totaly done")
})