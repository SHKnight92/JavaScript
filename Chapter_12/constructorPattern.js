var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
  this.draw = function () {
    console.log("I am rectangle");
    this.printProperties();
  };
  this.printProperties = function () {
    console.log("my height is " + this.height);
    console.log("my width is " + this.width);
  };
};

var rect3 = new Rectangle(44, 3);
rect3.draw();

var rect4 = new Rectangle(11, 7);
rect4.draw();
