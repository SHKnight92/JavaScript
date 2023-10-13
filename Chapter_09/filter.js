var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = arr1.filter(function (value, index, arr) {
  return value % 3 == 0;
});
console.log(result);

//Filter Implementation
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function myFilter(arr, cb) {
  var newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
var result = myFilter(arr, function (value) {
  return value <= 5;
});
console.log(result);
