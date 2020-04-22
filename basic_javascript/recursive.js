function sayHi(n){
    if(n==0){
        return 
    }
    console.log("Hi I am calling...", n)
    sayHi(n-1)
}

sayHi(10)

function sum(n){
    return n == 1 ? 1 : n + sum(n-1)
}
console.log(sum(2))


function factorial(n){
    return n == 1 ? 1 : n * factorial(n-1)
}
console.log(factorial(4))

//*******Recursive Function sum of array********** */
var arr = [1,2,3,4,5]

function sumOfArray(arr, lastIndex){
    if(lastIndex < 0){
        return lastIndex = 0 
    }
    
   return arr[lastIndex] += sumOfArray(arr, lastIndex-1)
}
console.log(sumOfArray(arr, arr.length-1))