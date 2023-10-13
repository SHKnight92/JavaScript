//Laxical Order:- z,y,x,...........c,b,a ......Z,Y,X,.....C,B,A

var a = "abc";
var b = "cde";
var c = "ade";
var d = "XYZ";

console.log(a > b); //false
console.log(b > a); //true
console.log(a > c); //false
console.log(a > d); //true

console.log("001" == 1); //true
console.log("001" === 1); //false
