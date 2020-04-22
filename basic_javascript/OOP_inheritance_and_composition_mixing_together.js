// Inheritance and Composition mixin 

var canEat = {
   eat:function(){
    console.log('Eating...')
   }
}

var canWalk = {
    walk:function(){
        console.log('Walking...')
       }
}

var canSwim = {
    swim: function(){
        console.log('Swimming...')
    }
}
//Working with Object literal, its mainly mixing 2 object with person Object
// var person = Object.assign({}, canEat, canWalk)

// person.eat()
// person.walk()


//Mixin with Constructor

function Person(name){
    this.name = name
}

var p1 = new Person('Shaheb Ali')
Object.assign(Person.prototype, canWalk, canEat)

console.log(p1)
p1.eat()
p1.walk()


// now We can make a function with the mixin... like below

console.log('*****************With Mixin Function**************')

function mixin(target, ...source){
    Object.assign(target, ...source)
}

var p2 = new Person('Shaheb')
mixin(Person.prototype, canEat, canWalk)

console.log(p2)
p2.eat()
p2.walk()



//if another function comes like goldFish then what to do...

function GoldFish (name){
    this.name = name
}

var gf = new GoldFish('bla bla bla')

console.log(gf)
Object.assign(GoldFish.prototype, canEat, canSwim )

//Method Overridding...
GoldFish.prototype.eat=function(){
    console.log('GoldFIsh eating...')
}
gf.swim()
gf.eat()