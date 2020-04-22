var a = 100
newPrint(a) // this funsion will not execute becuase it is undefined, and undefined function is not executable

print(10)

var newPrint = print
newPrint(45)

function print(a){
    console.log(a)
}

print(a)

//Creational Phase
// a= undefined
//newPrint = undefined
//print = ref

//Executional Phase
// a = 100
// newPrint = ref
