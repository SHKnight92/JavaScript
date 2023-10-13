// while (true) {
//   var n = Math.round(Math.random() * 10);
//   if (n === 5) {
//     console.log("winner winner chicken dinner");
//     break;
//   } else {
//     console.log("Your number is " + n);
//   }
// }

for (;;) {
  var n = Math.round(Math.random() * 10);
  if (n === 5) {
    console.log("Winner Winner chicken dinner");
    break;
  } else {
    console.log("Your number is " + n);
  }
}
