class user{
    constructor(username){
        this.username= username
    }

    logMe(){
        console.log(`username: ${this.username}`)
    }

    static createId(){// jb sbko permission nahi dega 
        return`123`
    }
}

const hippo =new user("NAhid")
//console.log(hippo.createId());


class Teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone= new Teacher("iphone", "jjjj")
console.log(iphone.createId())
//iphone.logMe()//username: iphone


