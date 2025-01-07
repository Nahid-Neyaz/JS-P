//Functions

function sayMyname(){
    console.log("N")
    console.log("A")
    console.log("H")
    console.log("I")
    console.log("D")
}
//sayMyname()
// function addTwon(n1,n2)
// {
//     console.log(n1+n2)
// }
//const result=addTwon(2,4)
//console.log("RESULT :",result)//undefined

// function addTwon(n1,n2)
// { 
//     // let result=n1+n2
//     // return result
//     //return n1+n2
// }
// const result=addTwon(2,4)
//console.log("RESULT :",result)//RESULT : 6

// addTwon()//Nan

// addTwon(2,4)//6

// function loginUserMessage(username="hippo"){
//     // jb kuch nahi paas hoga tu  hippo le liya jaayega as a default name
//     if(username== undefined){//(!username)
//      console.log("Please enter a user name")
//      return
//     }
//   return `${username} just logged in`
// }

// console.log(loginUserMessage("nahid"))//nahid just logged in
// console.log(loginUserMessage(""))// just logged in
// console.log(loginUserMessage())//undefined just logged in


//-------------------------------------------------------------

function calccarprice(...num1){//REST op. same as spread but depends on how it is used
   return num1
}

//console.log(calccarprice(200,400,600,2906))

const user={
    username: "nahid",
    price: 199
}

function handleObject(anyObject){
      console.log(`Username is ${anyObject.username} and price id ${anyObject.price}`)
}

//handleObject(user)
//not necessary to make an object and then pass
handleObject({
    username: "hippo",
    price: 9999
})
// we can also make an object while calling it 

const myNewArray =[
    22200,3000,4995,55
]

function returnSecondValue(AAray){
   return AAray[2]
}

//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([2,4,7,8]))

