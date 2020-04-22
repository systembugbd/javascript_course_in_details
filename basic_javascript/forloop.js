//************
//****Name****
//************ */

// var result= ""
// for(var i=1; i<=7; i++){
//     for(var j=1; j<=i; j++){
//        result += j
//     }
//     result += "\n"
// }

// console.log(result);

var result= ""
var text = "SHAHEB ALI"
for(var i=1; i<=3; i++){
    
   
      
       if(i==2){
        for(var j=1; j<=40; j++){
          result+= text
           result += "*"
        }
       }else{
        for(var j=1; j<=50; j++){
        result += "*"
       }
    }
    result += "\n"
}

console.log(result);