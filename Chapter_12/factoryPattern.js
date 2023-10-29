function createRect(width, height) {
  return {
    width: width,
    height: height,
    draw: function () {
      console.log("I am rectangle");
      this.printProperties();
    },
    printProperties: function () {
      console.log("my height is " + this.height);
      console.log("my width is " + this.width);
    },
  };
}

var rect1 = createRect(47, 52);
rect1.draw();

var rect2 = createRect(4, 7);
rect2.draw();
