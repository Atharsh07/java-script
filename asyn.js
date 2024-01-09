/* there is a special syntax for js promoisees
we can async any function and make the promise await  */

async function atharsh() {   // if remove async it will show error that atharsh is not a function
    return 5;
}

atharsh.then((value) => {
    alert(value);
})
// Now take example

async function whether() {
    let chennaiWheather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 deg")
        }, 1000);
    })
    let bangloreWhether = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("20 deg")
        }, 2000);
    })
}


var timeLimit = function(fn, t) {
    return async function(...args){
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("Time Limit Exceed")
                }, t);
            fn(...args).then(resolve).catch(reject)
        })

    }
};