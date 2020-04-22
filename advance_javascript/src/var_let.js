let age = 13
let name = 'Shaheb Ali'
console.log('My Name is '+ name + 'ad i a m ' + age + ' Years Old')

console.log(`My name is ${name} and I am ${age} years old i am ${age < 18 ? 'not Adult': 'adult'}`)


console.log(name.padStart(15, "*"))// *****Shaheb Ali
console.log(name.padEnd(15, "-"))//Shaheb Ali-----


// var vs let vs const
{
    let a = "i am late"
}

console.log(a)//will show uncought Error

for(let i=0; i<5; i++){

}
console.log(i)//will show uncought Error due to let but if it was var then will return 5 and I am late, so var may memory lick