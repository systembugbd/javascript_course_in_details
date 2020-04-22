// function myPromise(){
//     return Promise.resolve('My Promise')
// }
// console.log(myPromise())


// async function myAsyncPromise() {
//     return 'myAsyncPromise()'
// }

// myAsyncPromise().then(v=>alert(v))



// let p1 = Promise.resolve('I am a promise')

// let p1 = new Promise(resolve => {
//     setTimeout(resolve, 5000, "test value")
// })



// async function myAsyncFunc() {
//     // p1.then(v => alert(v))
//     let v = await p1
//     console.log(v)
//     console.log('test')
    
//   }

//   myAsyncFunc()

//this async function fetch from api and for of loop show data directly

// async function fetchData(){
//    try{
//         let res = await fetch('https://jsonplaceholder.typicode.com/userss')

//     let data = await res.json()
    
//     console.log(data)

//     //    let name = data.map(v => v.name)

//     for(let v of data){
//         console.log(v.username)
//     }
//    }catch(e){
//         console.log(e.message)
//    }
// }

// fetchData()

//Resolve Promise array | Multiple Promise resolve

// let promise = [
//     Promise.resolve(1),
//     Promise.resolve(2),
//     Promise.resolve(3)
// ]

// async function promiseArray (){
//     let result = await Promise.all(promise)
//   for(let v of result){
//       console.log(v)
//   }
// }

// promiseArray()
