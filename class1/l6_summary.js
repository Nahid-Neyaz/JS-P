//operations
let value=3
let negvalue= -value
// console.log(negvalue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)//power


let str1="hippo"
let str2=" hihi"

let str3=str1+str2

// console.log(str3)
// console.log(1+"2")// 12
// console.log("1"+2+2)//122
// console.log(1+2+"2")//32


// console.log(+true)// 1
// console.log(+"")//0
 

let gc=100
++gc
console.log(gc)//101


// COMPARISION//

// console.log(2>1)//true
 

// console.log("2">1)//true
// console.log("02">1)//true

// console.log(2>"1")//true

// console.log("2">"1")//true

//datatype same//

console.log(null>0)//false
console.log(null>=0)//true

console.log(undefined>=0)//false

//=== strict check valued and data type

console.log("2"===2)//false


//data types//
//primitive
//7 types: String, Number, Boolean, null, undefined, symbol, BigInt
//copy krke

const score=100

const active=false
const temp=null
let userEmail;

const id=Symbol('123')
const anID=Symbol('123')

console.log(id)
console.log(id==anID)


const bigNumber =333333333333333344444444444444444n

console.log(bigNumber)


//Reference
//non-primitive
//Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hippo",
    age: 20,
}
const myFunction = function(){
    console.log("HIPPO :)")
}

//console.log(typeof bigNumber)// null => object

//======================================================

//memory 2 types
//stack ,heap

//stack =>primitive =>copy of the original value
//heap=>non-primitive=> original value

let myn= "hippo"
 
let mynn= myn // hippo
mynn="flamingo" 

console.log(myn)//hippo
console.log(mynn)//flamingo

let user1={
    email:"hihih",
    upi:"h"

}
let user2=user1// reference is given to the original one not the copy

user2.email="hahahahah"

console.log(user1.email)//hahahahah
console.log(user2.email)//hahahahah