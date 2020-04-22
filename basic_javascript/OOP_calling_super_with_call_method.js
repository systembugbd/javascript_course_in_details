// Calling Super with Call Method

function Shape(color){
   this.color = color
 }
 
 Shape.prototype = {
     common: function(){
         console.log('I it Shape  Prototype Common Object for All')
     }
 }
 //Another Construction function Square
 
 function Square(width, color){
     Shape.call(this, color)
    this.width = width
 }
 Square.prototype = Object.create(Shape.prototype)
 
 Square.prototype.constructor = Square
 
 Square.prototype.draw=function(){
         console.log('this is Draw Function from Square Prototype')
     }
  
  
 
 var sqr = new Square(10, 'green')
 var sp = new Shape()
 
 console.log(sqr)
 
  