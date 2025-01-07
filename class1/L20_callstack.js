//Global execution context -> {}
//function execution context
// Evaluation execution context


//{}-> memory creation phase
//    -> execution phase

// let val1=10
// let val2=5
// function addNum(num1,num2){
//     let total = num1+num2
//     return total
// }

// let result1=addnum(val1,val2)
// let result2=addNum(10,2)

//1.Global execution context -> this
//2. memory creation phase -> data store
//val1 -> undefined
//val2 -> undefined
// addNum -> defination
//result1 -> undefined
//result2 ->undefined

//3. execution phase
//val1 <- 10
//val2 <- 5

// result1 -> 15 addnum ko call krta hai and then answer return krta hai
// addNum -> alag se box banta hai -> new execution context{new variable environment + Execution thread}: 
// when work done then it is deleted
// memory phase : val1 -> undefined,  val2 -> undefined, total -> undefined 
//execution phase : num1 -> 10 , num2 -> 5 , total -> 15 which is returned to the global execution context

// result2 ->12 addnum ko call krta hai and then answer return krta hai
//addnum -> alag se box bnta hai again -> new execution context{new variable environment + Execution thread}: 
// when work done then it is deleted
// memory phase : val1 -> undefined,  val2 -> undefined, total -> undefined 
//execution phase : num1 -> 10 , num2 -> 2 , total -> 12 which is returned to the global execution context


// |           |
// |   B       |   -> STACK -> LIFO -> pehle B nikalega and then A
// |   A       |
// |___________|