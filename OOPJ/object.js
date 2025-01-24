function multiplyBy5(num){
    return num*5
}
multiplyBy5.power=2
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

//fucntion function bhi and object bhi hai 

function createUser(username, score){
    this.username=username
    this.score=score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
    
}
const chai = new createUser("chai", 233)
const tea = new createUser("tea",222)

chai.printMe()

//////
//new -> new object creation


