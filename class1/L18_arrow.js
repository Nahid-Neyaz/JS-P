const user ={
    username: "nahid",
    price: "2906",

    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
    
}
// user.welcomeMsg()//nahid, welcome to website
// user.username="hippo"
// user.welcomeMsg()//hippo, welcome to website

//console.log(this)//{}
// browser me ye this run krne se  window aata hai 
// varna empty rehta hai 


// const chai=function(){
//     let username =" nahid"
//     console.log(this)
//     console.log(this.username)//udefined
// }
// chai()

//ARROW
const chai=()=>{
    let username =" nahid"
    //console.log(this.username)//undefined
    console.log(this)//{}
}
//chai()

// const addTwo =(num1, num2)=>{
//     return num1+num2
// }

// console.log(addtwo(29,6))

//const addTwo =(num1, num2)=>  num1+num2  //implicit return 
//const addTwo =(num1, num2)=>  (num1+num2)  //implicit return part2
//  jab curly braces me hoga tb return likhna zaroori hai aur jab anhi then likhna zaroori nahi hai


// const addTwo =(num1,num2)=>{username: "hippo"}//undefined
// const addTwo =(num1,num2)=> ({username: "hippo"})//{ username: 'hippo' }
// console.log(addTwo(29,6))






