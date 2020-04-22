function a(){
    b()
    console.log('function a execution')
}

function b(){
    d()
    console.log('function b execution')
}
function c(){
   
    console.log('function c execution')
}
function d(){
   c()
    console.log('function d execution')
}
var x = 40
a()
console.log('Console Log Global')


//Javascript or Programming language work in 2phase like

//Creational Phase

//Executional Phase