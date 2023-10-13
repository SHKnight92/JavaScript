var ar = [1, 2, 3, 4, 5, 1, 4, 8, 6, 3];

// var result = arr.find(function (value) {
//     return value == 4
// })

// console.log(result);

// var result = arr.findIndex(function (value) {
//     return value == 4
// })

// console.log(result)

function myFind(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return arr[i];
    }
  }
}
var result = myFind(ar, function (value) {
  return value === 9;
});
console.log(result);
