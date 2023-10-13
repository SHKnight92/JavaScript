// function add(a, b) {
//   var result = a + b;
//   console.log(result);
// }
// add(20, 50);

// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = [10, 20, 30, 40, 50];
// var arr3 = [50, 70, 6, 80, 9];

// function sumOfArray(arr) {
//   var sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
// }
// sumOfArray(arr1);
// sumOfArray(arr2);
// sumOfArray(arr3);

function sum() {
  for (i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// sum()



function addAll() {
  var sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}
addAll(5, 10, 15);
