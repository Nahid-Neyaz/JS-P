//------------------iterators-----------------------
//for
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

//break and continue

//while
// while (condition) {
    
// }

//do while
// do {
    
// } while (condition);

//--------------------------------------//

//for of

// ["", "", ""]
// [{}, {}, {}]//-> objects

// const arr =[1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num)
// }

// const greeting = "Hello Hippo"
// for (const greet of greeting) {
//     console.log(`Each character is ${greet}`)
// }

//MAPS->hold key values -> no duplicate 
// const map = new Map()
// map.set('IN','INDIA')
// map.set('JP','JAPAN')
// map.set('KOR','KOREA')

// console.log(map)
// for (const key of map) {
//     console.log(key)
    
// }
// for (const [key,value] of map) {
//     console.log(key,':-',value)   
// }

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }
// for (const [key,value] of myObject) {
//     console.log(key,':-',value)//not iterable
// }

// const myObject ={
//     js: 'javascript',
//     cpp: 'C++',
//     rb: 'Ruby',
//     swift: 'Swift'
// }
// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`)
// }

// const programming = ["js","rb","py","java","cpp"]
// for (const key in programming) {
//     console.log(key)
// }
//forof -> values aa jaata hai 
//forin -> 0,1,2,3,4

// const programming = ["js","rb","py","java","cpp"]
// for (const key in programming) {
//     console.log(programming[key])
// }



//  const coding = ["js","rb","py","java","cpp"]
// coding.forEach(function (item){
//     console.log()
// })

// coding.forEach( (item) => {
//     console.log(item)
// })

// function printme(item){
//     console.log(item)
// }

// coding.forEach(printme)


// coding.forEach((item,index,arr)=>{
//      console.log(item,index,arr)
// })


// const myCoding = [
//     {
//         languageName: "javascript",
//         languagefilename: "js"
//     },
//     {
//         languageName: "python",
//         languagefilename: "py"
//     },
//     {
//         languageName: "JAVA",
//         languagefilename: "j"
//     },
// ]

// myCoding.forEach( (item) => {
//     console.log(item.languageName)
// })

//-------------------------------------------------------



// const coding = ["js","rb","py","java","cpp"]

// const values= coding.forEach((item)=>{
//     //console.log(item)
//     return item
// })
// console.log(values) // undefined


//const myNums = [1,2,3,4,5,6,7,8,9,10]

// const ans=myNums.filter((nums)=>nums>7)
// //returns the array elements that follow the condition() 
// console.log(ans)

// const ans=myNums.filter((nums)=>{
//     return nums>4
// })
// console.log(ans)
// //{} jb dete hai tu return use krna rehta hai


// const newNums=[]

// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)

// const newNum = myNums.map((num) => num+10)
// console.log(newNum)

// const neww = myNums.map((num)=> num*10)
//                    .map((num)=>num+10) 
//                    .filter((num)=> num>=40)

// console.log(neww)

// const myNums = [1,2,3]
// const total=myNums.reduce(function(acc,curr){
//     console.log(`acc:${acc} and curr:${curr}`)
//     return acc+curr
// },0)
// console.log(total)

// const total = myNums.reduce((acc,curr)=> acc+curr,0)
// console.log(total)

const shoppingCart = [
    {
       itemName : "js course",
       price: 9999
    },
    {
        itemName : "Py course",
        price: 8989
    },
]
const total=shoppingCart.reduce ((acc,item)=>acc+item.price,0)
console.log(total)