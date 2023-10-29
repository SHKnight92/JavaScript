var rect = {
  height: 100,
  width: 50,
  draw: function () {
    console.log("I am a rectangle");
    console.log("My height is " + this.height);
    console.log("My width is " + this.width);
  },
};

rect.draw();
rect.height = 150;
rect.draw();
