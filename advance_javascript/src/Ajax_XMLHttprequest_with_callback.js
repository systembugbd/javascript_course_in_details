//Asyncronous task with XMLHttpRequest using callback

const xhr = new XMLHttpRequest()
xhr.open('get', 'https://jsonplaceholder.typicode.com/users')

xhr.onreadystatechange = function(e){
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            // console.log(xhr.response)
            let response = JSON.parse(xhr.response)
            console.log(response)

        }else{
            console.log(xhr.status)
        }
    }
}

xhr.send()


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

getRequest('https://jsonplaceholder.typicode.com/users', function(err, res){

    if(err){
        console.log(err)
    }else{
        // console.log(res)
        console.log('************Users**************')
        res.forEach(r => console.log(r.name))
        console.log('************Users**************')

    }
})

getRequest('https://jsonplaceholder.typicode.com/posts', function(err, res){

    if(err){
        console.log(err)
    }else{
        // console.log(res)
        res.forEach(r => console.log(r.title))
    }
})