var arr = [1, 2, 30, 4, 5,-1,-2];

// var result = arr.reduce(function(preValue,currValue, currIn,arr){
// return preValue+currValue
// },100)
// console.log(result)

// var result = arr.reduce(function (prev, curr) {
//   return Math.max(prev, curr);
// });
// console.log(result);

function myReduce(arr, cb, acc) {
  for (i = 0; i < arr.length; i++) {
    acc= cb(acc, arr[i]);
  }
    return acc;
}


var sum = myReduce(arr, function (prev,curr) {
    return prev + curr
}, 50)

var max = myReduce(arr, function (prev,curr) {
    return Math.max(prev,curr)
},0)

var min = myReduce(arr, function (prev,curr) {
    return Math.min(prev,curr)
},arr[0])
console.log(sum,max,min)
