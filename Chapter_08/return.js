function addAll() {
  var sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
var a = addAll(1, 2, 3);
console.log(a);
