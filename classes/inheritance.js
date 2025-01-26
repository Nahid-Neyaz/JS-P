class user {
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher("ji","ggg","23")

chai.addCourse();
const mm = new user("nnnnnnnnnn")

mm.logMe()

// console.log(chai==Teacher)//false
// console.log(chai==user)//false
console.log(chai instanceof Teacher)//true