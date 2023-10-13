var date = new Date();
var day = date.getDay();

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thuseday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Satureday");
    break;
  default:
    console.log("Error");
}

var n = 10;
switch (n % 2) {
  case 0:
    console.log(n + " is Even number");
    break;
  case 1:
    console.log(n + " is Odd number");
    break;
}


// const foo = 0;
// let output = "Output: ";
// switch (foo) {
//   case 0:
//     output += "So ";
//   case 1:
//     output += "What ";
//     output += "Is ";
//   case 2:
//     output += "Your ";
//   case 3:
//     output += "Name";
//   case 4:
//     output += "?";
//     console.log(output);
//     break;
//   case 5:
//     output += "!";
//     console.log(output);
//     break;
//   default:
//     console.log("Please pick a number from 0 to 5!");
// }
