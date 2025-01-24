// const user ={
//     username: "hippo",
//     loginc:6,
//     signedin: true,

//     getUserDetails: function(){
//         //console.log(" GOT USER DETAILS FROM DATABASE");
//         //console.log(`username: ${username}`)// not defined
//         //console.log(`username: ${this.username}`)//hippo
//         console.log(this)
//     }
// } //<- properties

// // console.log(user.username)
// // //console.log(user.getUserDetails());
// // console.log(this)//{}

function User(username, loginCount, isLoggedin){
    this.username=username
    this.loginCount=loginCount,
    this.isLoggedin=isLoggedin,

    //return this

    this.greeting = function(){
        console.log(`Welcome ${this.user}`);
    }
}

const userOne= new User("hippo",2,true)
const usertwo= User("flamingo",6,true)
// console.log(userOne);
console.log(userOne.constructor)// [Function: User] reference khud ke baare me
//console.log(usertwo);


// new -> empty object create hota hai -> paas on hoga jo likhe hai ->append 
//har baar naya instance


//instanceof
