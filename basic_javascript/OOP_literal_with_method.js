// In JavaScript there is no Class but there is two Pattern one is Factory Pattern another is Constructor Pattern

var rect = {
    width: 10,
    height: 10,

    draw: function(){
        console.log( this.width + this.height )
    },

    print: function(){
        console.log('Your Rectengle ' + this.width + " & Height " + this.height)
    }
}

// var res = rect.draw()

rect.width = 100

// rect.print()

function thisis(){
    console.log(this)
}
// thisis()


//Factory Pattern 


var factoryRec = function(width, height){
    return {
        width: width,
        height: height,
    
        draw: function(){
            console.log( this.width + this.height )
            console.log(this)
        },
    
        print: function(){
            console.log('Your Rectengle ' + this.width + " & Height " + this.height)
            console.log(this)
        }
    }
    
}

var rec1 = factoryRec(10,10)
rec1.print()

var rec1 = factoryRec(20,20)
rec1.print()



//Constructor Pattern
// new KEYWORD Must use in Constructor pattern when a new Instence Create for Object 

var constructorPattern = function(width, height){
    this.width = width
    this.height = height

   this.draw = function(){
        console.log('this is draw function from contructor pattern', this.width, this.height)
        console.log(this)
        this.print()
    }

    this.print = function(){
        console.log('this is another print function from consctructor Pattern')
        console.log(this)
    }
}

var cPattern = new constructorPattern(20, 60)
cPattern.draw()
// cPattern.print()

var cPattern2 = new constructorPattern(50, 50)
cPattern2.draw()
// cPattern2.print()
