//... Function statement;---- aka function declartion 
function a(){
    console.log("a");
}
//.. Function expression;-----
var b = function(){
    console.log("called b");
}
//.. annonoymous function:---
/*
function(){
    console.log("function called");//.. used for value for a function under any var or function;
}
*/
//.. name expression function:---
var b = function xyz(){
    console.log("its a name expression function");
}
//.. difference b/w parameter and arguments;---
var b = function (param1, param2){
    console.log("parameter about to pass");
}
b(1,2);
//.. first class functions --> important aka first class citizen
//.. ability to use func as a value and can pass has a argument or return to na another func is called first class func
//.. example:--
function x(parm){
    return function b(){
        console.log("hi");
    }
}
console.log(x(b));
//. arrow function ;---
hello = () => {
    return "Hello World!";
  }