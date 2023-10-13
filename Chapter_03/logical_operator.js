var a = 20;
var b = 30;
var c = 40;
var d = 50;
// && operator
console.log(a < b && c < d); //true
console.log(a > b && c < d); //false
console.log(a < b && c > d); //false
console.log(a > b && c > d); //false

// || operator
console.log(a < b || c < d); //true
console.log(a > b || c < d); //true
console.log(a < b || c > d); //true
console.log(a > b || c > d); //false

// ! operator
console.log(!(a < b) && c < d); //false
console.log(!(a > b) && c < d); //true
console.log(!(a < b) && c > d); //false
console.log(!(a > b) && c > d); //false
