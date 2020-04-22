//Iterator iterate the collection when we want, generally it is iterate one time and puase until we call it again to iterate like 

const arr = [1, 2, 3]

// function createIterator (collection){
//     let i =0 
//     return {
//         next(){
//             return {
//                 done: i >= collection.length,
//                 value: collection[i++]
//             }
//         }
//     }
// }

// var iterate = createIterator(arr)

// var iterate = arr[Symbol.iterator]() //this simple line is a iterator like above code return


// console.log(iterate) //{next: ƒ} / Array Iterator {}
// console.log(iterate.next()) // {done: false, value: 1}
// console.log(iterate.next()) // {done: false, value: 2}
// console.log(iterate.next()) //{done: false, value: 3}
// console.log(iterate.next())  //{done: true, value: undefined}

/*******************************************String iterator Uncomment below to see output ***********************/

// const text = "Shaheb"



// let obj = {
//     start: 1,
//     end:5,

//     [Symbol.iterator]: function(){
//         let currentValue = this.start
//         const self = this
//         return{
//             next(){
//                 return {
//                     done: currentValue >= self.end,
//                     value: currentValue >= self.end ? undefined : currentValue++
//                 }
//             }
//         }
//     }
// }


// let iterateObj = obj[Symbol.iterator]()
// let iterateText = text[Symbol.iterator]()

// console.log(iterateText) //StringIterator {}
// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())



//For of Loop
// for(let v of arr){
//     console.log(v)
// }

// let obj = {
//     start: 1,
//     end:5,

//     [Symbol.iterator]: function*(){
//         let currentValue = this.start
//         while(currentValue < this.end){
//             yield currentValue++
//         }
//     }
// }

// let iterateObject = obj[Symbol.iterator]()
// // console.log(iterateObject) //StringIterator {}
// console.log(iterateObject.next())
// console.log(iterateObject.next())
// console.log(iterateObject.next())
// console.log(iterateObject.next())
// console.log(iterateObject.next())
// console.log(iterateObject.next())
// console.log(iterateObject.next())


// const arr = [1,2,3]

// function createIterator (collection){
//     let i =0 
//     return {
//         next(){
//             return {
//                 done: i >= collection.length,
//                 value: collection[i++]
//             }
//         }
//     }
// }



// let obj = {
//     start: 1,
//     end:5,

//     [Symbol.iterator]: function(){
//         let currentValue = this.start
//         const self = this
//         return{
//             next(){
//                 return {
//                     done: currentValue >= self.end,
//                     value: currentValue >= self.end ? undefined : currentValue++
//                 }
//             }
//         }
//     }
// }


// var iterate = obj[Symbol.iterator]()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())



function* generate(collection) {
    for (let i = 0; i < collection.length; i++) {
        yield collection[i]
    }


}

let it = generate(arr)

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())




//Iterator with Object like below


var obj = {
    start: 1,
    end: 5,
    [Symbol.iterator]: function () {

        let currentValue = this.start
        const self = this
        return {
            next() {
                return {
                    done: currentValue > self.end,
                    value: currentValue > self.end ? undefined : currentValue++
                }
            }
        }

    }
}

// for(let v of obj){
//     console.log(v)
// }

var ite = obj[Symbol.iterator]()
console.log(ite)
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())