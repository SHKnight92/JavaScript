var arr = [1, 2, 3, 4, 5, 6];
// // map
// var arrSqr = arr.map(function (value, index, arr) {
//   return value * value;
// });
// console.log(arr);
// console.log(arrSqr); //Create a new array

// // foreach
// var arrSqr = arr.forEach(function (value) {
//   return value * value;
// });
// console.log(arr);
// console.log(arrSqr); // undefined

// function myMap(arr) {
//   var newArr = [];
//   for (i = 0; i < arr.length; i++) {
//     var temp = arr[i] * arr[i];
//     newArr.push(temp);
//   }
//   return newArr;
// }

// console.log(myMap(arr));

// function myMap(arr, cb) {
//   var newArr = [];
//   for (i = 0; i < arr.length; i++) {
//     var temp = cb(arr[i]);
//     newArr.push(temp);
//   }
//   return newArr;
// }
// var qb = myMap(arr, function (value) {
//   return value * value * value;
// });

// var sqr = myMap(arr, function (value) {
//   return value * value;
// });
// console.log(qb);
// console.log(sqr);

function myMap(arr, cb) {
  var newArr = [];
  for (i = 0; i < arr.length; i++) {
    var temp = cb(arr[i]);
    newArr.push(temp);
  }
  return newArr;
}
var sq = myMap(arr, function (value) {
  return value * value;
});
console.log(sq);

var mTen = myMap(arr, function (value) {
  return value + 10;
});
console.log(mTen);
