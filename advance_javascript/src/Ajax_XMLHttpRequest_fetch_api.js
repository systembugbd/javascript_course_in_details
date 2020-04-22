const BASE_URL = 'https://jsonplaceholder.typicode.com'


fetch(`${BASE_URL}/users/1`)
    .then(res => res.json())
    .then(data => console.log(data.address.geo))
    .catch((err) => {
        console.log(err)
    });




function getFetchRequest(url) {
    
   return new Promise((resolve, reject) => {

        let ahr = new XMLHttpRequest()
        ahr.open('get', url)

        ahr.onreadystatechange = function(e){
            if(ahr.readyState == 4){
                if(ahr.status == 200){
                    let response = JSON.parse(ahr.response)
                    
                    resolve(response)
                }else{
                    reject(new Error('Error Occorred'))
                }
            }
        }

        ahr.send()
 
   })
}

getFetchRequest(`${BASE_URL}/users/`)
    .then(data => {
       for(let v of data){
           console.log(v.name)
           console.log(v.email)
          for(let key in v.address){
              console.log(v.address[key])
          }
       }
      
    })
    .catch(e =>{
        console.log(e.message)
    })

   