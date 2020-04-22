
var arr= [1,2,3,4,5,6,7]
var sum = 0
//built in forEach function
arr.forEach(function(val, i, arr){
    console.log(val, i, arr)
    return sum+=val
})

console.log(sum)

//own made forEach function first we can implement like below but second one is with callback funcion

// function myForEach(arr, cb){
//     var sum = 0;
//     for(var i=0; i<arr.length; i++){
//         sum+= arr[i]
//     }
//     return sum
// }

// var a = myForEach(arr)
// console.log(a)

console.log("own made forEach function first as like as JavaScript forEach with callback funcion")
//************************ */

function myForEach(arr, cb){
   
    for(var i=0; i<arr.length; i++){
        cb(arr[i], i, arr)
    }
    
}
var sum =0
myForEach(arr, function(val, i, arrs){
    console.log(val, i, arrs)
    sum+= val
})
console.log(sum)

var square = myForEach(arr, function(val, index, arrs){
 arrs[index] = val**2
})
console.log(arr)


//*************This above myForEach as like as built in forEach funcion working like real forEach funcion */