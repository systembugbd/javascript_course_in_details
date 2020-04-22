// Built in map function is works like be myMap Function its call callbackFn
var arr = [1,2,3,4,5]
var arr1  = arr.map(function(value){
    return value * value * value
})
console.log(arr1)

function myMap(arrs, cb){
    var newArr = []
    for(var i=0; i<arrs.length; i++){
        newArr.push(cb(arrs[i], i, arrs))
    }

    return newArr;
}

var myMapArr = myMap(arr, function(value, index, arr){
   if(value % 2 == 1){
       return value * value
   }
})

 console.log(myMapArr)

 var myMapArrs = myMap(arr, function(value, index, arr){
        return value * value
    })
 
  console.log(myMapArrs)
 

  var myMapArrs = myMap(arr,function(value, index, arr){
    return value * value * value
})

console.log(myMapArrs)


 //forEach function implementation in callback
 console.log("ForEach Start From Here")

 var arr2 = [1,2,3,4,5]
 var sum = 0;
 arr2.forEach(function(value){
         sum +=value;
 })

 console.log(sum)

 function myForEach(arr, cbs){
    
    for(var i=0; i<arr.length; i++){
        cbs(arr[i], i, arr)
    }
    
 }
// console.log(myForEach(arr2))

var sus=0;
myForEach(arr2, function(val, i, arr){
    console.log(val, i, arr)
    sus += val*5
  })

console.log(sus)