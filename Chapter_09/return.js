function greet(msg) {
  function greeting(name) {
    return msg + ", " + name;
  }
  return greeting;
}
var gm = greet("good morning");
console.log(gm("knight"));

var gn = greet("Good Night");
console.log(gn("Doly"));

function base(b) {
  return function (n) {
    var result = 1;
    for (i = 0; i < b; i++) {
      result *= n;
    }
    return result;
  };
}

var base10 = base(10)
console.log(base10(2))


var base2 = base(2)
console.log(base2(4))
