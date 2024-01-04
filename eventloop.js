/*
it will check whether the gec (global excution contest is busy to add the callback que and micro stask que )


*/

/*
here we can see that SET timeout have trust issues
*/

console.log("start");

setTimeout (function cb(){
    console.log("Callback");
}, 5000)

console.log("ends");

let start = new Date().getTime();
let end = start;
while(end < start + 10000){
    end = new Date().getTime();
}

console.log("while expires");

//here we can see that we put 5 sec for the cb but it will excute after 10 sec only due to the 
// gec is still busy doing loop this will be checked by the taskloop once the gec is done 
//the cb will be excuted