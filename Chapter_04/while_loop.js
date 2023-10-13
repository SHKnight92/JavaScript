// var i = 0;
// while (i < 10) {
//     console.log(i + " hello world");//start 0
//   i++;
// //   console.log(i + " hello world");//start 1
// }

// var i = 1;
// while (i <= 10) {
//   var n = 7;
//   console.log(n + " x " + i + " = " + n * i);
//   i++;
// }

// var n = 1;
// while (n <= 100) {
//   if (n % 2 == 0) {
//     console.log(n);
//   }
//   n++;
// }

// var n = 0;
// var sum = 0;
// while (n < 10) {
//   sum += n;
//   n++;
//   console.log(sum + " + " + n + " = " + (n + sum));
// }

// var n = 1;
// sum = 0;
// while (n < 10) {
//   if (n % 2 == 1) {
//     sum += n;
//     console.log(n,sum,n+sum);
//   }
//   n++; 
// }
// console.log(n, sum);



var isRunning = true
while(isRunning){
var n =Math.round(Math.random()*100)
if(n === 5){
console.log('Winner! Your number is '+n)
isRunning =false
}else{
    console.log('you got the number is '+n)
}
}