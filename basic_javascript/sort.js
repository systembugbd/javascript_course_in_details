var persons = [
    {
        name: 'Shaheb',
        age: 34
    },{
        name: 'Shahid',
        age: 30
    },{
        name: 'Shahika',
        age: 26
    },{
        name: 'Sorowar',
        age: 40
    }
]

var arr = [9,5,7,4,-4,-2,-8,2,6,3,8,1,10]

var arr2 = [9,5,7,4,2,6,3,8,1,10]

// arr.sort()
// console.log(arr)

arr.sort(function(a, b){
    if(a>b){
        return -1
    }else if(a<b){
        return 1
    }else{
        return 0
    }
})
console.log(arr)
console.log(persons)

persons.sort(function(a, b){
    if(a.age > b.age){
        return 1
    }else if(a.age < b.age){
        return -1
    }else{
        return 0
    }
})

console.log(persons)

var checkEven = arr.every(function(val){
    return val % 2 ==0
})

console.log(checkEven)


var checkAbove0 = arr2.every(function(val){
    return val >= 0
})

console.log(checkAbove0)


var checkOdd = arr.some(function(val){
    return val % 2 == 1
})

console.log(checkOdd)

var checkNagitiveNum = arr.some(function(val){
    return val <= 0
})

console.log(checkNagitiveNum)