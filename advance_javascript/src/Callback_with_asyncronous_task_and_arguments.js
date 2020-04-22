
//Callback function for Asyncronous task
//Callback not only handle Aysncroous task but also pass a function as a argument with in a function 

let arr = [1,2,3,4]

let sqrArr = arr.map(v => v * v) //callback arrow function as a argment with in a map function

console.log(sqrArr) //showing general sqrArray 1,4,9,16

function asyncFun(arr, cb){
    return arr.map(v => {
        // setTimeout(cb.bind(null, v), 0) //get the Asyncronous callback with bind() method null = this, in this case null

        setTimeout(() => cb(v), 0) //callback with arrow function also working in asyncronous task
    })
}

let qbArr = asyncFun(arr, v => console.log(v))

console.log(qbArr)



/////////WHY NOT TO USE CALLBACK function in Asyncronous task, see below code/////////
/*
BELOW CODE WILL NOT RUN BUT, WHY SHOULD NOT USE CALL BACK INSTED OF PROMISE IN ASYNCRONOUS TASk, again again and again calling the web api....

const BASE_URL = "https://jsonplaceholder.typicode.com"


function getRequest(url, callback){
    const xhr = new XMLHttpRequest()
    xhr.open('get', url)

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                let response = JSON.parse(xhr.response)
                callback(null,response)
            }else{
                callback(xhr.status, null)
            }
        }
    }

    xhr.send()
}

getRequest(`${BASE_URL}/posts/1`, (err, res) => {
    if(err){
        throw new Error('Error Occoured')
    }

    let { userId } = res

    getRequest(`${BASE_URL}/users/${userId}`, (err, res) => {
        if(err){
            throw new Error('Error Occoured 2')
        }

        getRequest(`${BASE_URL}/posts/1/comments/${res.id}`, (err, res){
            if(err){
                throw new Error('New Error Occoured')
            }
                console.log(res)
        })
    })
})

*/