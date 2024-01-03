
//... callback function 
/*
document.getElementById("clickme").addEventListener("click", function xyz(){
    console.log("atharsh");
})
*/

//.. qt we have to count how many times the button clicked .;-

function attachEventlistner(){
    let count = 0;
    document.getElementById("clickme").addEventListener("click", function xyz(){
        console.log("button clicked", ++count);
    })
}
attachEventlistner();