// while (true) {
//   var n = Math.round(Math.random() * 100);
//   if (n === 5) {
//     console.log("winner winner chicken dinner!");
//     break;
//   } else {
//     console.log("You got the number is " + n);
//   }
// }

for (var i = 1; i <= 20; i++) {
  if (i % 5 == 0) {
    break;
  } else {
    console.log(i);
  }
}
