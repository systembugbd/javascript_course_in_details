//clouser is 

for(var i = 0; i<5; i++){

    // here i is clouser but not working properly
    setTimeout(function(){
        // console.log(i) // return 5 after 1second at 5time which is horrible
    }, 1000 * i)

}

//iife (immediately invking function)

for(var i = 0; i<5; i++){
   //this self invoking function is iife
    (function(n){
        setTimeout(function(){
            console.log(n)
        }, 1000 * n)
    })(i+1)
}