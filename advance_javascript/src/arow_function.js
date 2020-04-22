// function add(a, b){
//     return a + b
// }

// let add = (a,b) => return a + b
let add = (a, b) => a + b
console.log(add(50,50))

let sqr = x => x*x
console.log(sqr(5))


function testMe () {
    console.log(this)
  }

  testMe.call({})

  let obj = {
      name: 'Shaheb',
      print: () => {
          console.log(this)
      }
  }
  obj.print()

  let obj2 = {
      name: 'shaheb',
      print: function () {
          console.log(this.name)//it will show name
          let self = this
          setTimeout(function () {
              console.log(this)
              
              alert(`Hello, ${self.name}` )
            }, 1000) //.bind(this)
      }

  }

  obj2.print()

//this with Arrow function, in arrow function this alwayes refer to parent this, and apply, call, bind is not work in arrow function

  let obj3 = {
    name: 'shaheb',
    print: function () {
        console.log(this.name)//it will show name
        // let self = this
        setTimeout(() => {
            console.log(this)
              alert(`Hello, ${this.name}` )
          }, 1000) //.bind(this)
    }

}

obj3.print()