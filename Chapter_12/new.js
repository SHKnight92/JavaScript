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
  
//   var rect1 = new Rectangle(44, 3);
//   rect1.draw();
  
//   var rect2 = new Rectangle(11, 7);
//   rect2.draw();
  


function myNew(constructor) {
  var obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  var argsArray = Array.prototype.slice.apply(arguments);
  constructor.apply(obj, argsArray.slice(1));

  return obj;
}


var rect3 = myNew(Rectangle, 10,20)
rect3.draw()
