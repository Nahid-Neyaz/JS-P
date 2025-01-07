//array

const myArr=[0,1,2,3,4,5]

//console.log(myArr[0])
const myhero=["hippo","flamingo"]
// shallow copy ->same reference
//deep copy-> not same reference

// myArr.push(6)
// myArr.pop()



// myArr.unshift(9)//add in the beginning
// myArr.shift()
// console.log(myArr)


// console.log(myArr.includes(2))
// console.log(myArr.indexOf(2))

 const newArr= myArr.join()
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

//slice, splice

const m1= myArr.slice(1,3)
//console.log(m1)// [ 1, 2 ]
//console.log(myArr)//[ 0, 1, 2, 3, 4, 5 ]
const mm1= myArr.splice(1,3)//original   array manipulate 
//console.log(mm1)[ 1, 2, 3 ]
//console.log(myArr)[ 0, 4, 5 ]

//-----------------------------------------------

const f1=["a","b","c"]
const f2=["A","B","C"]

//f1.push(f2)
// console.log(f1)
// console.log(f1[3][2])//C

//f1.concat(f2)
//console.log(f1)
//const FF=f1.concat(f2)
//console.log(FF)//[ 'a', 'b', 'c', 'A', 'B', 'C' ]

const aa=[...f1,...f2]// spread operator
//console.log(aa)//[ 'a', 'b', 'c', 'A', 'B', 'C' ]

const rr=[1,2,3,[4,5,6],7,8,9]
const q=rr.flat(Infinity)
//console.log(q)
//[
 //   1, 2, 3, 4, 5,
  //  6, 7, 8, 9
  //]
  

// console.log(Array.isArray("hippo"))//false
// console.log(Array.from("hippo"))//[ 'h', 'i', 'p', 'p', 'o' ]
// console.log(Array.from({name: "hippo "}))//interesting []

let s1= 100
let s2= 200
let s3= 300

console.log(Array.of(s1,s2,s3))//[ 100, 200, 300 ]



