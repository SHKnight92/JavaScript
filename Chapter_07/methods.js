var obj = {
  a: 15,
  b: 20,
  c: 25,
};

console.log(Object.keys(obj)); //key
console.log(Object.values(obj)); //value
console.log(Object.entries(obj)); // key & value

var obj2 = Object.assign({}, obj); //create a new object like first object
obj2.a = 1000;
console.log(obj);
console.log(obj2);
