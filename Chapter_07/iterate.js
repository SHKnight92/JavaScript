var obj = {
  a: 50,
  b: 25,
  c: 75,
};

// console.log("a" in obj); //true
// console.log("p" in obj); //false

for (i in obj) {
  console.log(i + " : " + obj[i]);
}
