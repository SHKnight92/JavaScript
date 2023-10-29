function myFunc(){
    console.log(this)
    console.log(this.a + this.b)
}

myFunc.call()