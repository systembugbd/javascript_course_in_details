var set = new Set([1, 2, 3, 4, 5])
set.add(6)
set.add(7)
set.add(8)
set.add(7) //duplicate not allowed
set.add(8) //duplicate not allowed
set.add(9)
console.log(set.keys())
console.log(set.values())
console.log(set.entries())

for (let v of set) {
    console.log(v)
}

let keysIterate = set.keys()
// let keysIterate = set.values()
console.log(keysIterate.next())
console.log(keysIterate.next())
console.log(keysIterate.next())
console.log(keysIterate.next())
console.log(keysIterate.next())
console.log(keysIterate.next())
console.log(keysIterate.next())
console.log(keysIterate.next())
console.log(keysIterate.next())
console.log(keysIterate.next())

/**************Map Data Structure*************/
let map = new Map([
    ['a', 10],
    ['b', 20],
    ['c', 30],
    ['d', 40]
])
map.set('e', 50)
console.log(map.size)
console.log(map.delete('c'))
console.log(map)
console.log(map.size)
console.log(map.get('d'))
console.log(map.values())
console.log(map.keys())

for (let v of map.values()) {
    console.log(v)
}

for (let [k, v] of map) {
    console.log(k)
}

map.forEach((k, v) => {

    console.log(k, v)
})

map.set({
    name: 'Shaheb Ali'
}, 45)
console.log(sum)
console.log(map)




// let a = {
//         a: 10
//     },
//     b = {
//         b: 20
//     }
    
// let weakSet = new WeakSet([a, b])
// a = null
// console.log(weakSet)

// console.log(weakSet.has(a))
// console.log(weakSet.has(b))


// let weakMap = new WeakMap([
//     [a, 45],
//     [b, 75]
// ])
// a = null
// console.log(weakMap.get(a))
// console.log(weakMap.has(a))