
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



//... settimeout concept :----

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


//this is the qt where we need to use var only not the let function --->

function x(){
    for(var i = 1; i<=5; i++){
        function close(i){
            setTimeout(function(){
                console.log(i);
            },i*1000);
        }
        close(i);
    }
}
x()

// how the closur works behind the scene 
function outest(){
    var c = 20;
    function outer(b){
        function inner(){
            console.log(a,b,c);
        }
        let a = 10;
        return  inner;
    }
    return outer;
}
let b = 100;
var close = outest()("atharsh");
close();



// data hiding and encapsulation (closur):----

function counter(){
    let count = 1;
    return function incrementCounter(){
        count++;
        console.log(count);
    }
}
var counter1 = counter();
counter1();

//.... contructive function

function Counter(){
    let count = 0;
    this.incrementCounter = function(){
        count++;
        console.log(count);
    }
    this.decrementCounter = function(){
        count--;
        console.log(count);
    }
}
var counter1 = new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
counter1.decrementCounter();

var a = function (parm){
    return function b(){
        console.log("hi");
    }
}
console.log(a());