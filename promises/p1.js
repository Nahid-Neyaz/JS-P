const promiseone = new Promise(function(resolve, reject){// do ans async task
//database calls, cryptography, network
setTimeout(function(){
    console.log('Async task is complete')
    resolve()// ab ye jaakr connect hua .then ke saath
},1000)
})

promiseone.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("ASYNC 2 resolved")
})


//data pass krna
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Hippo", email: " flamingo"})

    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"nahid._.neyaz",password:"hippoindancingworld"})
        }
        else{
            reject("ERROR: Something went wrong")
        }

    },1000)

})

promisefour
.then((user) => {
    console.log(user)
    return user.username
})
.then((username) =>{
    console.log(username)
})
.catch(function(error){
    console.log(error)
}).finally(()=>console.log("FINALLY"))


const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"hippo",password:"hippoindancingworld"})
        }
        else{
            reject("ERROR: kuch went wrong")
        }

    },1000)
})


//same as then waits for some time
//cannot directly handle error
async function consumepromisefive(){
    try {
        const response = await promisefive
        console.log(response);  
    } catch (error) {
        console.log(error);
    }
}
consumepromisefive()



