var a = 20;
var b = 20;
if (a > b) {
  console.log(a + " is greater than " + b);
} else if (a < b) {
  console.log(b + " is greater than " + a);
} else {
  console.log("Both are same");
}

var n = 0;
if (n == 0) {
  console.log(n + " is Zero");
} else if (n % 2 == 0) {
  console.log("The number is Even number");
} else if (n % 2 == 1) {
  console.log("The number is Odd number");
}

var date = new Date();
var day = date.getDay();

if (day == 0) {
  console.log("Today is Sunday");
} else if (day == 1) {
  console.log("Today is Monday");
} else if (day == 2) {
  console.log("Today is Tuesday");
} else if (day == 3) {
  console.log("Today is Wednesday");
} else if (day == 4) {
  console.log("Today is Thusday");
} else if (day == 5) {
  console.log("Today is Friday");
} else if (day == 6) {
  console.log("Today is Saturday");
}
