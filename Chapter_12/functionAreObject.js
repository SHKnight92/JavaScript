function test() {
  console.log("Something");
}
console.log(test.name, test.length);

var Rect = new Function(
  "height",
  "width",
  `this.width = width;
this.height = height;
this.draw = function () {
  console.log("I am rectangle");
  this.printProperties();
};
this.printProperties = function () {
  console.log("my height is " + this.height);
  console.log("my width is " + this.width);
};`
);

var rect5 = new Rect(6, 7);
console.log(rect5);
