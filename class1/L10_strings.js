//strings
const name= "nahid"
const repoCount=50

console.log(name+repoCount+"Value")//outdated

console.log(`Hello ${name} and my body count is ${repoCount}`)

const gameName= new String('HIPPO')

console.log(gameName[0])//H
console.log(gameName.__proto__)//{}

console.log(gameName.length);
console.log(gameName.toUpperCase);//original value did not got changed

console.log(gameName.charAt(2));//P
console.log(gameName.indexOf('t'));// -1

const newString= gameName.substring(0,2);//0->2-1
console.log(newString)//hi


const ns= gameName.slice(-1,4);
console.log(ns);


const d="     hippo    "
console.log(d.trim());


const url=" https://hi.com/%20nahidneyaz"

console.log(url.replace('%20','-'))//https://hi.com/-nahidneyaz
console.log(url.includes('hi'))//true

console.log(url.split('/'))
