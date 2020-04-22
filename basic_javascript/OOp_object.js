//use constructor function as a object function or function

var Q1 = new Function('width', 'height', 
    `this.width = width
    this.height = height
    
    this.question = function(){
        return this.width + this.height
    }`
)

 var rec = new Q1(10,20)
console.log(rec.question())


//CALL  | APPLY  | BIND

function test(c, d){
    console.log(this)
    console.log('this is a test function', this.a + this.b,  ( c+d))
}
test()
test.call({a:10, b:10},5,5)
test.apply({a:30, b:20},[1,2])
var a = test.bind({a:15, b:15})
a(1,5) //after bind with test



//How to work new Keyword in before class and Function
function rect(width, height){
    return width+height
}
var a= rect(10,10)
// console.log(a)
// with constructor or new keyword
console.log('new Keyword with constructor pattern')

function rects(width, height){
        this.width = width
        this.height = height

        this.draw = function(){
            console.log(this.width + this.height)
        }

}
// var a = new rects(15,10)
// a.draw()

//Our new keyword with constructor prototype
console.log('Our own New Keyword build with Constructor Prototype')

function newKeyword(constructor){
    var obj = {}
    
    Object.setPrototypeOf(obj, constructor.prototype)
    var argsArray = Array.prototype.slice.apply(arguments)
    constructor.apply(obj, argsArray.slice(1))
    
    return obj
}

var ownNewKeyInstance = newKeyword(rects, 15,15)
ownNewKeyInstance.draw()
