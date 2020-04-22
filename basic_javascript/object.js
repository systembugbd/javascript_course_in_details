//{} literal Object sign
//Constructor () Object.create(obj))

var obj = {
    a: 10,
    b: 20
}

// obj.c = 30
// console.log(obj.c)
// console.log(obj) //{ a: 10, b: 20 }
// console.log(obj.a) //10
// console.log(obj.a + obj.b) // 30

//array Object Notation
// var result= 'a'

// console.log(obj[result]) // 10


//for in object loop and object sumation 
// var sum = 0;
// for(key in obj){
    // console.log(key)// a, b
    // console.log(obj[key]) // obj[a], obj[b]
    // sum += obj[key]
// }
// console.log(sum) // 30

//Construction Object Creation
// var Obj = Object()
// Obj.a = 50;
// console.log(Obj)

// var Obj2 = new Object()
// Obj2.a = 100;
// console.log(Obj2)


// var Obj3 = Object.assign(Obj2)
// Obj3.a = 300;
// console.log(Obj3)


// delete obj.c



// var newObj = {
//     a:10,
//     b:20,
   
// }

// var res = obj.a === newObj.a && obj.b === newObj.b ? true : false;

// var obj1String = JSON.stringify(obj) == JSON.stringify(newObj) ? true : false

// console.log(JSON.stringify(obj))
// console.log(JSON.stringify(newObj))

// console.log(res)

// console.log(obj1String)

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

for(var i = 0 ; i<Object.entries(obj).length; i++){
    console.log(Object.values(obj)[i])
}