//singleton->construction se bana tb singleton





//object literals

//Object.create// constructor method

const mySym=Symbol("key1")

const Jsuser={
   name:"hippo",
   age: 20,
   //mySym: "key1",//not working correctly wrong
   [mySym]: "key1",// correct  
   location: "jungle",
   bird: "flamimgo",
   online: "No",
   lastlogin: ["monday","tuesday"]
}

// console.log(Jsuser.age)//20 //preferred
// console.log(Jsuser["age"])//20
// //console.log(Jsuser.mySym)//key1 first way
// console.log(Jsuser.mySym)//undefined
// console.log(Jsuser[mySym])//key1
//console.log(typeof Jsuser.mySym)// string but symbol it is 

Jsuser.bird="sparrow"//change the value

//Object.freeze(Jsuser)// acct freezed no change 
Jsuser.bird="flamingo"// not worked already freezed
// console.log(Jsuser)


Jsuser.greeting = function(){
    console.log("Hello to the Hippo world")
}

Jsuser.greeting2 = function(){
    console.log(`Hello to the Hippo world, ${this.name}`)
}
// console.log(Jsuser.greeting())
// console.log(Jsuser.greeting2())




//console.log(Jsuser.greeting)//undefined
//console.log(Jsuser.greeting())//error not a function because freeze was used before
//after removing freeze
//console.log(Jsuser.greeting)//[Function (anonymous)]
//console.log(Jsuser.greeting())//Hello to the Hippo world













//---------------------------------------------------------------------------------------
//const tinderUser = new Object()//singleton obejct
const tinderUser={}// non singleton object

tinderUser.id = "NN2906"
tinderUser.name = "Hippo"
tinderUser.login = "online"


//console.log(tinderUser);

const regularUser={
    email: "hi", 
    fullname:{
         username:{
            fname:"a",
            lname:"b"
         }
    }
}

// console.log(regularUser)
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.username)


const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {3:"a",4:"b",5:"c"}

//const obj3= {obj1,obj2}
// {
//   obj1: { '1': 'a', '2': 'b', '3': 'c' },    
//   obj2: { '3': 'a', '4': 'b', '5': 'c' }     
// }

//const obj3= Object.assign({},obj1,obj2)
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'c' }
//{}<-obj1,obj2

const obj3={...obj1,...obj2}//spread
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'c' }
//console.log(obj3)


const users = [
    {
        id : 1,
        name: "hippo"
    },
    {
        id : 2,
        name: "hippo"
    },
    {
        id : 3,
        name: "hippo"
    }
]

// users[1].name
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isLogged"))

//----------------------------------------------------------


//de structuring

const course={
      coursename: "animal world",
      price: "2906",
      teacher: "nahid"
}

//course.coursename

//const {teacher} =course 
//console.log(teacher)// nahid
const {teacher:t} =course 
console.log(t)//nahid

// const navbar=({ company})=>{
//this iss how we use destructuring in react
// }
// navbar(company = "flamingo")



//API
//JSON-> JS object notation
// {
//     name: "nahid",
//     c: "animal",
//     price:" free"
// }
// kabhi objects milta hai 
// [
//     {},
//     {},
//     {}
// ]
// kabhi array milta hai


