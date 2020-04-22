let p1 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 3000, 'One Promis Resolve')
})

console.log(p1)

p1.then((resolve)=>{
    console.log(resolve)
})


let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'TWO Promis Resolve')
})

p2.then((v)=>{
    console.log(v)
})

function getIphone(isPassed){

        let promise = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(isPassed){
                    resolve('I have passed and i got Iphone')
                }else{
                    reject(new Error('You have failed, So you are not eligable to get an IPHONE'))
                }
            }, 2000)
        })

        return promise
}

// console.log(getIphone(true))

getIphone(false)
    .then((response)=>{ 
        console.log(response)
    })
    .catch((err)=>{
        console.log(err.message)
    })
    


// const delay = s => new Promise(resolve => setTimeout(resolve, s+1000, "test Value"))

// delay(4).then( ()=> console.log("2 second Delay"))
// delay(1).then( ()=> console.log("1 second Delay"))
// delay(3).then( ()=> console.log("3 second Delay"))
// delay(1).then( ()=> console.log("4 second Delay"))
// delay(5).then( ()=> console.log("5 second Delay"))


// let p1 = Promise.resolve('test')
// console.log(p1)
// p1.then((v)=>{console.log(v)})

// let p2 = Promise.reject("reject")
// console.log(p2)
// p2.catch((e)=>{console.log(e)})



// let p1 = Promise.resolve('test')
// let p2 = Promise.resolve("test2")
// let p3 = Promise.resolve("test3")

// let promissArr = [p1, p2, p3]

// Promise.all(promissArr)
//     .then(arr => {
//         console.log(arr)
//     })


// let p1 = new Promise(resolve => {
//     setTimeout(resolve, 5000, 'One')
// })
// let p2 = new Promise(resolve => {
//     setTimeout(resolve, 3000, 'three')
// })

// let p3 = new Promise(resolve => {
//     setTimeout(resolve, 1000, 'three')
// })

//All Method of Promise
// Promise.all([p1,p2,p3])
//     .then(arr=>{
//         console.log(arr)
//     })

//Race Method of Promise
// Promise.race([p1,p2,p3])
//     .then(arr => {
//         console.log(arr)
//     })