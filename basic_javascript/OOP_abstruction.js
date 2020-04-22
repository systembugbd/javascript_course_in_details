var Rectengle = function(width, height){
    this.width = width
    this.height = height

    this.position = {
        x: 10,
        y: -100
    }

    this.draw = function(){
        this.print()
    }

    this.print = function(){
        console.log("Your Rectengle size is width : " + this.width, "Height: "+this.height)
    }

    this.position = function(){
        console.log(position.x, position.y)
    }
}

// var rect1 = new Rectengle(10,20)

// rect1.draw()


//Abstruction in OOB is below

var Rectengle2 = function(width, height){
   
    var positions = {
        x: 10,
        y: -100
    }

    this.width = width
    this.height = height


    
    var position = function(){
        console.log("Your Rectengle size is width : " + width, "Height: "+height)
        console.log(positions.x, positions.y)
    }

    this.draw = function(){
        this.print()
        position()
         
    }
    
    // this.getPosition = function(){
    //     return position()
    // }

    this.print = function(){
        console.log("Your Rectengle size is width : " + this.width, "Height: "+this.height)

    }

    Object.defineProperty(this, 'posi', {
        get: function(){
            return positions;
        }, 
        set: function(value){
            return positions = value
        }
    })

}

var rect2 = new Rectengle2(10,20)

rect2.draw()
console.log(rect2.posi)
rect2.posi.x = 100
console.log(rect2.posi)
