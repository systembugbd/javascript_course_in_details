// Inharitance with Prototype
function extend(parentConstructor, childConstructor){

    childConstructor.prototype = Object.create(parentConstructor.prototype)
    childConstructor.prototype.constructor = childConstructor

}
//Shape is common for all other own object we create so it is used for all objct

function Shape(){
    console.log('I am from Shape Constructor')
 }
 
 Shape.prototype = {
     common: function(){
         console.log('I it Shape  Prototype Common Object for All')
     }
 }
 //Another Construction function Square
 
 function Square(){
     console.log('this is Square function')
 }
 extend(Shape, Square)

 Square.prototype.draw=function(){
         console.log('this is Draw Function from Square Prototype')
     }
  
  
 
 var sqr = new Square()
 var sp = new Shape()
 
 console.log(sqr)
 
 
 // sp => Shape => Object
 // sqr => Square => Object
 
 //With the inharitance now Chain will like below.
 
 // sqr => square => shape => Object
 //Inharited 
 
 
 //now We can create another Constructor function or Object like Circle
 
 
 function Circle(){
     console.log('this is Circle Constructor function of Circle')
 }
 //when Inharit any Constructor Class, then the Constructior prototype need to change, below one will not add to protype becasue below Object.Create a new prototype, So circleMe need to add to that prototype 
 // Circle.prototype = {
 //     circleMe: function(){
 //         console.log('This is Circle Prototype calling cirCleMe')
 //     }
 // }
 
 
 //now we can see the circleMe fucntion in the Circle prototype

 extend(Shape, Circle)
 //Create a new Object of Shape prototype and set it to to Circle Prototype to inharite the shape common function
 
 //constructor reset after Prototyp create
  
 Circle.prototype.circleMe=function(){
         console.log('This is Circle Prototype calling cirCleMe')
     }
  
 
 
 var cr = new Circle()
 