// var arr = [1,2,3,4,5,6]

// var find  = 5
// var isFound=false;
 
// for(var i=0; i<=arr.length; i++){
//     if(arr[i] == find){
//         isFound = true
//         break;
//     }
   
// }
// !isFound ? console.log('data not found') :  console.log("data Found")

// Multi Dimentional Array
// var arr2 = [
//     [10,15,20,35,10],
//     [30,55,30,45,80],
//     [40,65,45,65,60]    
// ]

// var sumArr = []

// for(var i = 0; i< arr2.length; i++ ){
//     var sum=0;
//     for(var j = 0; j<arr2[i].length; j++){
//         console.log("Multi array ID is " + i + " - "+ arr2[i][j])
//         sum += arr2[i][j]
        
//     }
//     sumArr.push(sum)
// }
// console.log(sumArr);


 // array revarse

 var arr = [1,2,3,4,5,6,7];
 for(var i=0; i<arr.length/2; i++){
   var temp = arr[i]
   //console.log(arr.length - 1 - i)
arr[i] = arr[arr.length - 1 - i]

arr[arr.length - 1 - i] = temp
 }
  console.log(arr)
