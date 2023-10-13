var arr = [1, 2, 3, 4, 5];
// var sum =0
// arr.forEach(function(value,index,num){
//     // console.log(value,index,num)
//     sum += value
// })
// console.log(sum)

function forEach(array, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(array[i], i, array);
  }
}
// var sum = 0;
forEach(arr, function (value, index, num) {
  console.log(value, index, num);
//   sum += value;
});
// console.log(sum);
