// // let myname= "nahid     "
// // console.log(myname.truelength);


// let myheroes=[ "thor", "spiderman"]
// let heropower ={
//     thor: "hammer",
//     spiderman: "sling",

//     getspiderpower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }


// Object.prototype.hippo = function(){
//     console.log(`hippo is present in all object`);
// } 


// Array.prototype.flamingo= function(){
//     console.log("HAHAHAHAAHAHAAH");
// }
// myheroes.hippo()
// myheroes.flamingo()
// //heropower.flamingo()



// //INHERITANCE


// const user = function(){
//     name: "hippo" 
//     active: true
// }
// const teacher ={
//     makeVideo: true
// }

// const TeachingSupport={
//     isAvailable: false
// }

// const TASupport = {
//     makeassignment: 'JS',
//     fulltime:true,
//     __proto__:TeachingSupport
// }

// teacher.__proto__ = user

// //modern syntax
// Object.setPrototypeOf(TeachingSupport,teacher)



let anotherusername = "HELLOHIPPO"

String.prototype.trueLength=function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}
anotherusername.trueLength()
"hippo".trueLength()
"hahahhhhhhhhhhh".trueLength()