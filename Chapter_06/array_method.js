var arr = [1, 2, 3, 4, 5];
var str ='Saddam'
var arr1 = [6, 7, 8, 9, 10];

// console.log(arr.join(" | "));
// console.log(arr.fill(4))
// console.log(arr.fill(1, 1, 4));
// console.log(arr.concat(arr1))

console.log(Array.isArray(str))
console.log(Array.isArray(arr))



var a =[1,2]
var b = a
// b[0] = 5
console.log(a)
console.log(b)

var a =[1,2]
var b = Array.from(a)
b[0] = 5
console.log(a)
console.log(b)