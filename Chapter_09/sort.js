var persons = [
  {
    name: "A",
    age: 24,
  },
  {
    name: "B",
    age: 19,
  },
  {
    name: "C",
    age: 26,
  },
  {
    name: "D",
    age: 21,
  },
];

persons.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  } else {
    return 0;
  }
});
console.log(persons);

// persons.sort();
// console.log(persons)

var arr = [4, 8, 6, 1, 7, -5, 5, 6, 8, 5, 0, 1, 5, 3, -3, 4, 9, 7, 2, -9];
// arr.sort();
// console.log(arr);

// ascending Order
arr.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});

console.log(arr);

// Descending Order
arr.sort(function (a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});

console.log(arr);

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1];
// var num =[2,4,6]

var res = num.every(function (value) {
  // return value % 2 == 0;
  return value > 0;
});

console.log(res);

var res1 = num.some(function (value) {
  // return value % 2 == 0;
  return value < 0;
});

console.log(res1);
