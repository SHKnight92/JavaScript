var a = 5
function b(){
    var x= 5
    return function(){
        console.log(x)
    }
}
var y = b()
console.dir(y)