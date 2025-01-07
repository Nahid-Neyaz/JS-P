 //if

//  const isuserloggedin = true
//  if(isuserloggedin){
//     console.log("LOGGED IN")
//  }
//  else
//  {
//     console.log("not LOGGED IN")
//  }
//=== also checks the type 
//!==



// const userloggedin = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if( userloggedin && debitCard && loggedInFromGoogle){
//     console.log("hippo")
// }

// if(  loggedInFromEmail || loggedInFromGoogle){
//     console.log("flamingo")
// }

//SWITCH CASE

// switch(key){
//     case value:
//         break;
//     default:
//         break;
// }


//truthy values
// [],"0",'false," ",{}, function(){}

const userEmail = "hippoworld"
if( userEmail){
    console.log( "got user email")
}
else{
    console.log( "did not got user email")
}
//falsy values
//false, 0, -0, BigInt 0n, "", null, undefined, NaN 


// if(userEmail.length === 0){
//     console.log("Array is empty ")
// }

const emptyObj = {}
if( Object.keys(emptyObj).length === 0){
   console.log("Object is empty")
}




// console
// false == 0 : true
// false == '' : true
// '' == 0 : true



// NULLISH COALESCING OPERATOR ( ?? )

 let val1;
//  val1 = 5 ?? 10
// console.log(val1)//5

// val1= null??10
// console.log(val1)//10
// val1= null??10??3
// console.log(val1)//10

//ternairy operator
// condition ? true:false

