// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (var i = 0; i < 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// for (var i = 1; i <= 10; i++) {
//   var n = 17;
//   console.log(n + " x " + i + " = " + i * n);
// }

// var sum = 0;
// for (var i = 1; i <= 10; i++) {
//   console.log(sum + "+" + i + "=" + (sum + i));
//    sum += i;
// }
// console.log(sum);

var sum = 0;
for (var i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(sum + "+" + i + "=" + (sum + i));
    sum += i;
  }
}
console.log(sum);
