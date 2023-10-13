function a(x) {
  function b(y) {
    function c(z) {
      return x + y + z;
    }
    return c;
  }
  return b;
}
var result = a(10)(5)(2);
console.log(result);

function currying(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
var res = currying(14)(15)(1);
console.log(res);
