/*
function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z);
//.........

z();
//... so this is called clouser how this works 
*/


//... settimeout concept :----
/*
function x(){
    var i =1; 
    setTimeout(() => {
        console.log(i);
    }, 3000);
    function z(){
        var j = 2;
        setTimeout(function(){
            console.log(i,j);
        }, 5000);
        console.log("atharsh");
    }
    z();
}
x();
console.log("Atharsh");
*/

//.. most asked intreview qt js..
//.. print in console that 1 2 .. 5 after each of its time interval 

function x(){
    for(let i=1; i<=6; i++) {
        setTimeout(function(){
            console.log(i);
        }, i*1000);
    }
}
x();
console.log("atharsh");