var addition = function(a, b){
    return a+b
}

var anotherAdd = addition

setTimeout(function(){

    console.log(addition(3,4))
    console.log(anotherAdd(5,7))
}, 2000)




