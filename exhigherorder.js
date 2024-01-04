//.. Map[], reduce[], filter[] are higher order functions in js 

const arr =[5, 1, 3, 2, 6];

// double the value
const output = arr.map((x) =>  x*2);
const output2 = arr.map((x) =>x*3);
const output3 = arr.map( (x) =>x.toString(2));
const output4 = arr.filter((x) => x % 2);
console.log(arr);
console.log(output, "the value have been doubled");
console.log(output2, "the value have been tripled");
console.log(output3, "the value of arr in binary");
console.log(output4, "Odd in the arr");


// reduce  functions;;---

// tradition way of finding sum of digits in the arr

function Findsum(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(Findsum(arr));

//using reduce function 

const output5 = arr.reduce(function(acc, cur){
    acc = acc + cur;
}, 0)
console.log(Findsum(arr)); // compare the both functions in this 