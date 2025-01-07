// date

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString())

console.log(typeof myDate)//object


let DD= new Date(2004,5,29)//month 0 se start ho raha hai
console.log(DD.toDateString())

let ff= new Date("2004-06-29")
console.log(ff.toLocaleString())

let hhi= new Date("06-29-2004")
console.log(hhi.toLocaleString())


let myTimeStamp=Date.now();

console.log(myTimeStamp)//milliseconds
console.log(hhi.getTime())



console.log(Math.floor(Date.now()/1000))//seconds me chahiye tu




let gg= new Date()
console.log(gg);
console.log(gg.getHours())



gg.toLocaleString('default', {
    weekday: "long"
})



