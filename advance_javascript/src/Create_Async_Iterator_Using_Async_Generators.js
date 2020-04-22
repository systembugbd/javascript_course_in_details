//Async and await is required to work with promise as a result 

async function* asyncGenerator(){
    let i = 1

    while(true){
        
        if(i > 5) return
        yield await Promise.resolve(i++)

    }
}

;(async function(){
    let sum = 0;
    for await (let v of asyncGenerator()){
        console.log(v)
        sum+=v
    }
    console.log(sum)
})()