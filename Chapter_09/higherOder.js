// function add(a, b) {
//   return a + b;
// }

// function manipulate(a, b, func) {
//   var c = a + b;
//   var d = a - b;

//   function multiply() {
//     var m = func(a, b);
//     return c * d * m;
//   }
//   return multiply
// }

// var result = manipulate(3,4,add)
// console.log(result())


function add(a, b) {
  return a + b;
}
function manipulate(a, b, func) {
  var c = a + b;
  var d = a - b;
  var m = func(a, b);
  function multiply() {
    return m * c * d;
  }
  return multiply;
}
var result = manipulate(3, 4, add);
console.log(result());
