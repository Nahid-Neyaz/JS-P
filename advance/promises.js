//it is an object
// promises call back leta hai
const promiseOne = new Promise(function(resolve,reject){
    //perform an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    }, 1000)
})

//consume
//resolve ka cnnection hai .then ke saath
promiseOne.then(function(){
    console.log("PROMISE CONSUMED")
})
