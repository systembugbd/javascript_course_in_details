function currying(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

console.log(currying(5)(2)(3))