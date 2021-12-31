let a=5;
let b=4;

function add(a,b){
    return (a+b);
}
function subtract(a,b){
    return (a-b);
}
function multiply(a,b){
    return (a *= b);
}
function divide(a,b){
    return (a /= b);
}

let n=1;
function increment(n){
return ++n;
}
function decrement(n){
return --n;
}

let x='3'
let y='3.33'
let z='WUBALUBADUBDUB!'
let c='3.33'
function makeInt(x){
    var x = parseInt(x,10)
   return x;
}
function makeInt(y){
    var y = parseInt(y,10)
   return y;
}
function makeInt(z){
    var z = parseInt(z,10)
   return z;
}
function preserveDecimal(c){
    var c = parseFloat(c);
    return c;
}