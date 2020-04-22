// class Rectangl{

//     constructor(width, height){

//         this.width = width
//         this.height = height
//         this.showName = function(name){
//            console.log( this.name = name)
//         }
//     }

// test2 = function(param) {
//     console.log(param)
// }

//     draw(){
//         console.log(this.width + this.height)
//     }

// }

// let rec = new Rectangl(10,20, 3, 'rectengal')
// rec.draw()

// rec.showName('Shaheb Ali')

// console.log(rec)
// rec.test2('Ali is coding...')

//*********Private Property****************** */

// const _radious = Symbol()
// const _size = Symbol()

// class Person{
//     constructor(name, email){

//         this[_radious] = radious
//         this[_size] = size
//         this.name = name,
//         this.email = email
//     }

//     print(){
//         console.log(this.name, this.email)
//     }

//     static create(str){
//         let person = JSON.parse(str)
//         return new Person(person.name, person.email, 2, 5)
//     }
// }

// let str = '{"name" : "Shaheb Ali", "email" : "wwwdonus@gmail.com"}'


// let p1 = Person.create(str)
// console.log(p1.name)
// console.log(p1.email)
// console.log(p1.print())

// let p2private = Person('Shaheb', 'shaheb@gmail.com', 2, 10)
// console.log(p2private)


//make property private in class with Symbol


// const _radious = Symbol()
// const _name = Symbol()

// class Person{
//     constructor(radiou, name){

//         this[_radious] = radiou
//         this[_name] = name
//         this.name = name

//     }

//     [_radious](){
//         console.log(this.name, this.email)
//     }

//     draw(){
//         console.log(this.name, this.email)
//     }



// }

// let p3 = new Person(2, 'Shaheb')
// console.log(p3)

// console.log(Object.getOwnPropertyNames(p3))
// let key = Object.getOwnPropertySymbols(p3)[0]
// console.log(key)
// console.log(p3[key])


//make property private in class with WeakMap()


// const _radious = new WeakMap() //Making Property private with WeakMap()
// const _name = new WeakMap() //Making Property private with WeakMap()
// const _resize = new WeakMap() //Making Property private with WeakMap()

// class Person{
//     constructor(radiou, name){
//         this.size = 100
//         _radious.set(this, radiou) //Setting value of private Property with WeakMap() set method
//         _name.set(this, name)//Setting value of private Property with WeakMap() set method

//         //method private with WeakMap() set()
//         _resize.set(this, () =>{ 
//            console.log(this.size) 
//         })

//     }

//     _resize(){
//         console.log(this.name, this.email)
//     }

//     //ES6 Getter and Setter
//      get radiousss(){
//        return _radious.get(this)
//     }
//     set radious(value){
//         _radious.set(this, value)
//     }

//     draw(){
//         console.log(_radious.get(this), _name.get(this)) // calling Private Property with WeakMap() get() Method

//         //private method Calling with WeakMap() get()
//         _resize.get(this)()
//     }



// }

// let p4 = new Person(2, 'Shaheb')
// p4.draw()
//setting value with es6 method set keyword to the private property
// p4.radious = 1500

//setting value with es6 method get keyword to the private property
// console.log(p4.radiousss)





/**ES6 Inharitance**/

// class Shape{
//     constructor(color){
//         this.color = color
//     }
//     draw(){
//         console.log('I am draw from Shape', this.color)
//     }
// }

// class Rectangl2 extends Shape{

//     constructor(color, width, height){
//         super(color)
//         this.width = width
//         this.height = height
//         this.color = color
//     }

//     draw(){
//         console.log('Drawing from Rectangle ... ', this.color)
//     }
//     calculate(){
//         return this.width + this.height
//     }

// }

//Export and Import Module 
// import Rectangl2 from './Rectangl2'

// let r = new Rectangl2('green',4,5)
// console.log(r.calculate())
// r.draw()


//Import everything from Func.js
// import * as func from './func'

// console.log(func.add(2,2))
// console.log(func.div(2,2))
// console.log(func.mod(5,2))
// console.log(func.multi(10,2))

//Import only 2function from Func.js

// import {div, mod} from './func'

// console.log(div(212,5))
// console.log(mod(10,2))