function simple(a, b, cb) {
  var c = a + b;
  var d = a - b;
  return cb(c, d);
}

var result = simple(5, 8, function (c, d) {
  return c + d;
});
console.log(result);

var result2 = simple(5, 8, function (c, d) {
  return c - d;
});
console.log(result2);

var result3 = simple(5, 8, function (c, d) {
  return c * d;
});
console.log(result3);
