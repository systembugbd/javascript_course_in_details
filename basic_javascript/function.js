var arr1 = [1, 2, 3]
var arr2 = [1, 2, 3, 4, 5]
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function count() {
    var sum = 0;
    for (var i = 0; i < arguments[0].length; i++) {
        sum += arguments[0][i];
    }
    // console.log(sum)
}
// count(arr1)
// count(arr2)
// count(arr3)

function multiCount() {
    var sum = 0;
    var argCount = 0;
    for (var j = 0; j < arguments.length; j++) {
        for (var i = 0; i < arguments[j].length; i++) {
            sum += arguments[j][i];
            argCount += 1

        }
    }
    argCount++
    console.log("Total sum of " + j + " Array is " + sum)
    console.log(arguments)
}

// multiCount(arr1, arr2, arr3)


function countNumber(){
    var sum = 0;
    for(var i=0; i<arguments.length; i++){
        sum += arguments[i]
    }
    console.log(sum)
}

//countNumber(1,2,3,4,5,6,7,8,9,10)

// return function
function person(name, email){
    return {
        name: name,
        email: email
    }
}
var p1 = person('Shaheb Ali', 'wwwdonus@gmail.com')
//console.log(p1.name)
p1.name = "Shahid Islam"
//console.log(p1.name)


