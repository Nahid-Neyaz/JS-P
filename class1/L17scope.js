

if(true){
    let a=10
    const b=20
    var c=30
}


// console.log(a)//error scope no
// console.log(b)//error scope no
//console.log(c)// but this prints the value of C but is should it is the error
// var avoid 

// for(let i=0;i<Array.length;i++){
//     const element=array[i]
// }

//---------------------------------------------------------------------------------------------------------------------------------------------------
function one(){
    const username= "nahid"

    function two(){
      const website ="youtube"
      console.log(username)
    }
    //console.log(website)
    //two()
}
//one()

if(true){
    const username = "nahid"
    if(username === "nahid"){
        const website = " youtube"
        //console.log(username+website)
    }
    //console.log(website)
}
//console.log(username)


//++++++++++++
function addone(num){
    return num+1
}
console.log(addone(9))

//console.log(addtwo(5))
const addtwo=function(num){
    return num+2
}

console.log(addtwo(5))