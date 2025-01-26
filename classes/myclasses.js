//ES6

class User{
    constructor (username, email, password){
        this.username=username;
        this.email = email;
        this.password=password
    } 

    encryptPassword(){
        return `${this.password}abc`         
    }

    changeusername(){
        return  `${this.username.toUpperCase()}`
    }
}

    // const chai = new User("chai", " chai@gmail.com", "123" )

    // console.log(chai.encryptPassword());
    // console.log(chai.changeusername());


//behind the scenes
    function user(username, email, password)  {
             this.username=username
             this.email=email
             this.password=password
    } 

    user.prototype.encryptPassword = function(){
        return `${this.password}abc`
    }

    const tea = new User("teappot", " tea@gmail.com", "123" )

    console.log(tea.encryptPassword());
    console.log(tea.changeusername());



    
    

