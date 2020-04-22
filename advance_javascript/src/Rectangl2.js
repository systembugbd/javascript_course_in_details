import Shape from './Shape'
class Rectangl2 extends Shape {

    constructor(color, width, height) {
        super(color)
        this.width = width
        this.height = height
        this.color = color
    }

    draw() {
        console.log('Drawing from Rectangle ... ', this.color)
    }
    calculate() {
        return this.width + this.height
    }

}

export default Rectangl2