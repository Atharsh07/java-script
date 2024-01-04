const radius = [1, 2, 3, 4];
const area = function(radius){
    return Math.PI*radius*radius;
};
const circumfrence = function(radius){
    return 2*Math.PI*radius;
};
const diameter = function(radius){
    return 2*radius;
};


const calculate =  function(radius, logic){
    const out = [];
    for(let i=0; i < radius.length; i++){
        out.push(logic(radius[i]));
    }
    return out;
};
console.log(calculate(radius, area));
console.log(calculate(radius, circumfrence));
console.log(calculate(radius, diameter));
