obj1 = {
  a: 5,
  b: 10,
};
obj2 = {
  a: 5,
  b: 10,
};

console.log(obj1 == obj2);

if (obj1.a == obj2.a && obj1.b == obj2.b) {
  console.log(true);
} else {
  console.log(false);
}

console.log(obj1)
console.log(JSON.stringify(obj1))

console.log(JSON.stringify(obj1) == JSON.stringify(obj2));
