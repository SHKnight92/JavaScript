// First class function
function add(a, b) {
  return a + b;
}

// 01. A function can be stored in a variable
var sum = add;
console.log(sum(4, 5));
console.log(typeof sum);

// 02. A function can be stored in an array
var arr = [];
arr.push(add);
console.log(arr[0](8, 2));

// 03. A function can be stored in an object
var obj = {
  sum: add,
};
console.log(obj.sum(3, 8));

// 04. We can create function as we need
setTimeout(function () {
  console.log("I have created...");
}, 5000);

// 05. We can pass function as an arguments
// 06. We can return functions from another function
