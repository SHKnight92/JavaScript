
var x = 55
function test() {
    var x =45
    // console.log(x)

    function nested() {
        // var y =  100
        console.log(x)
    }
    nested()
    // console.log(y)
}
console.log(x)
test()