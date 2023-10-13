// function greeting(greet, name) {
//   function sayHi() {
//     console.log(greet, name);
//   }
//   sayHi();
// }
// greeting("Good morning", "Saddam");

// function greeting(greet, name) {
//   function firstName() {
//     if (name) {
//       return name.split(" ")[0];
//     } else {
//       return "";
//     }
//   }
//   var messege = greet + " " + firstName();
//   console.log(messege);
// }

// greeting("good morning");

var greeting = function (greet, name) {
  function firstName() {
    if (name) {
      return name.split(" ")[0];
    } else {
      return "";
    }
  }
  var msg = greet + " " + firstName();
  return msg;
};
var greetingMsg = greeting;
console.log(greetingMsg("Good evening"));
