// Closure is when a function is able to remember and access it's lexical scope even when that function executing outside it's lexical scope.


// able to remember and access it's lexical scope

function test() {
  var msg = "I am learning Lexical scope and Closure";
  function sayMsg() {
    console.log(msg);
  }
  sayMsg();
}
test();

// when that function executing outside it's lexical scope

function test() {
  var msg = "I am learning Lexical scope and Closure";
  return function() {
    console.log(msg);
  }
}
var myMsg = test();
myMsg()

for (i = 1; i <= 10; i++) {
  (function (n) {
    setTimeout(function () {
      console.log(n);
    }, 1000 * n);
  })(i);
}
