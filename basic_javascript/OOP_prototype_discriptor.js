var person = {
    name: 'Shaheb'
}

// console.log(person)

// for(var i in person){
//     console.log(i)
// }

// console.log(Object.keys(person))
 

 var descriptor = Object.getOwnPropertyDescriptor(person, 'name')
 console.log(descriptor)

//set own property descriptor
Object.defineProperty(person, 'name', {
     configurable:false,
     writable:false,
     enumerable:false,
     value: 'Nadims'
 })

 console.log(Object.keys(person))//will not show anyhing
 for(var i in person){
     console.log(i) //will not show anything since it is false in define property above
 }

 var descriptors = Object.getOwnPropertyDescriptor(person, 'name')
 console.log(descriptors)

 console.log('get Prototype of Any Object like Belo')

//Change Prototype of BaseObject like below toString to MyStringTo

 var baseObj = Object.getPrototypeOf(person)

 Object.defineProperty(baseObj, 'toString',{
     writable:false,
     configurable:false,
     enumerable:false,
     value: 'MyStringTo'
 })


 var descriptorOfPerson = Object.getOwnPropertyDescriptor(baseObj, 'toString')
 console.log(descriptorOfPerson)
 
person.__proto__.PI = 3.1416

console.log(Object.getPrototypeOf(person))

var newObj={
    PI: 5345.42
}


console.log('Hello from here is now Object')
console.log(
    Object.getPrototypeOf(newObj)
)


//Prototype 
console.log('Prototype in Square Method execute here with Inharitance concept')


function Square(width){
    this.width = width

    this.getWidth = function(){
        console.log('this is getMethod')
        this.draw()
    }
}

Square.prototype = {
    draw: function(){
        console.log('Draw')
    },
    toString: function(){
        console.log('My width is ' + this.width + "from To String Method")
    }
}

var sqr1 = new Square(10)
var sqr2 = new Square(20)

sqr1.getWidth()
sqr2.toString()


 