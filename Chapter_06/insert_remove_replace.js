// // Array element added
// var arr = [1, 2, 3, 4, 5];

// arr[3] = 400; //added an element by index number
// console.log(arr);

// arr.push(100); //added last element
// console.log(arr);

// arr.unshift(50); //added first element
// console.log(arr);

// //Array element removed
// var arr1 = [1, 2, 3, 4, 5];
// arr1[3] = undefined;
// console.log(arr1); //remove an element by index number

// arr1.pop();
// console.log(arr1); //remove last element

// arr1.shift();
// console.log(arr1); //remove first element


var arr = [1, 2, 3, 4, 5];
arr.splice(4,1,5,6,7)
console.log(arr)

var n = [9,8,7,6,5]
n.splice(1,3)
console.log(n)