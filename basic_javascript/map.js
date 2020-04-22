var arr = [1,2,3,4,5]
//Built in MAP in javascript 
var sum = 0;
var res = arr.map(function(val, index, arr){
    return sum+= val
    
})

console.log(res)
console.log(arr)


//Own Map Funcion works like original map Function

function myMap(arr, cb){
    var newArr=[]
    for(var i=0; i<arr.length; i++){
        newArr.push(cb(arr[i], i, arr))
    }
    return newArr
}

var myMapRes = myMap(arr, function(val, i, arr){
    console.log(val, i, arr)
    return val * 2
})

console.log(myMapRes)