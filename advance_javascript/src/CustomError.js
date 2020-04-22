//Error Handelling...
try{
    console.log('I am try block start ')
    console.log('I am line 1 in try block ')
    console.log('I am line 2 in try block')

    throw new Error('I am error, showing from try block, now throwing Error to catch block(e.message)')

    console.log('I am line 3 ')
    console.log('I am try block end ')
}catch(e){
    console.log(e.message)
}finally{
    console.log('i am finally Block ')
}

//Creating Custome Erorr Class 
class CustomError extends Error{
    constructor(msg) {
        super(msg)

        if(Error.captureStackTrace){    
            Error.captureStackTrace(this, CustomError)
        }
    }
}


//Error Handelling...
try{
    console.log('I am try block start ')
    console.log('I am line 1 in try block ')
    console.log('I am line 2 in try block')

    throw new CustomError('I am error, showing from try block, now throwing Error to catch block(e.message)')

    console.log('I am line 3 ')
    console.log('I am try block end ')
}catch(e){
    console.log(e.message)
}finally{
    console.log('I am finally Block ')
    console.log(10+10+10+10)
}

