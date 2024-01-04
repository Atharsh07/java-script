//.. Map[], reduce[], filter[] are higher order functions in js 

const arr =[7, 1, 3, 8, 6];

// double the value
const output = arr.map((x) =>  x*2);
const output2 = arr.map((x) =>x*3);
const output3 = arr.map( (x) =>x.toString(2));
const output4 = arr.filter((x) => x % 2);
console.log(arr, "", "the array");
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
console.log(Findsum(arr), "the sum of the number using traditional way");

//using reduce function 

const output5 = arr.reduce(function(acc, cur){
    acc = acc + cur;
    return acc;
}, 0);
console.log(output5, "sum of the number using reduce higher order function"); // compare the both functions in this 

// max value normal way 

function maxvalue(arr){
    max = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}
console.log(maxvalue(arr),"largest of the number using traditional way");

// max value of the function using reduce way :----

const output6 = arr.reduce(function(acc, cur){
    for(let i = 0; i<arr.length; i++){
        if(cur>acc){
            acc = cur;
        }
    }
    return acc;
}, 0);

console.log(output6, "largest of the number using reduce higher order function");

//complicated arr with real world objects 

const users = [
    {firstName:"atharsh", lastName:"kumar", age:"19"},
    {firstName:"sai", lastName:"karthick", age:"18"},
    {firstName:"akilan", lastName:"kumar", age:"18"},
    {firstName:"balaji", lastName:"baji", age:"50"},
    {firstName:"Hi", lastName:"bye", age:"50"},
    {firstName:"pritivi", lastName:"khant", age:"50"},
    {firstName:"boo", lastName:"shit", age:"7"},
];
//list of full names

const out = users.map(x => x.firstName + " " + x.lastName);
console.log(out,"List of all names");

/*Now the most complicatied thing is that we have to sort out that how many members are present in the
particular age category */
//We can do it using reduce :----

const out2 = users.reduce(function(acc, cur){
    if(acc[cur.age]){
        acc[cur.age] = ++ acc[cur.age];
    }
    else{
        acc[cur.age] = 1;
    }
    return acc;
},{})
console.log(out2, "list of age category");

// now we need to print that list of first name from the object whoes age are less than 30
// chaining the filter and the map

const print = users.filter( (x) => x.age < 30)
.map((x) => x.firstName); // map will work under the output of filter
console.log(print,"the list first name whoes age is less than 30");

const print2 = users.reduce(function(names, user){
    if(user.age<30){
        names.push(user.firstName)//can also use acc.unlist(cur.firstName);
    }
    return names;
}, [])//it's initial value and we want the result in the form of an array (names), not the object.
console.log(print2,"the list frist name whoes age is leass than 30 using reduce");
//...........................................ends........................//
