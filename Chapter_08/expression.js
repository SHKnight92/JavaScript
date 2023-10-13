var addition = function (a, b) {
  return a + b;
};
var another = addition;

setTimeout(function () {
  console.log("I will call after 5 second");
}, 5000);

console.log(another(20, 5));
console.log(addition(5, 10));
