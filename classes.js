// ES6

// class user{
//     constructor(userName, email, password){
//         this.userName = userName
//         this.email = email
//         this.password = password
//     }
// // iss tarike se hum method add kar rahe hai..
//     encrytpassword(){
//         return `${this.password}abc`
//     }

//     chnageUserName(){
//         return `${this.userName.toUpperCase()}`
//     }
// }


// const cahi = new user("shivam kumar","shivam.com",123)
// console.log(cahi.encrytpassword());
// console.log(cahi.chnageUserName());

class Usrs{
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`userName is ${this.userName}`);
    }
}

class Teacher extends Usrs{
    constructor(userName,email, password){
        super(userName)
        this.email = email
        this.password= password
    }

    addCource(){
        console.log(`A new Cource was added in the userName ${this.userName}`);
    }
}


const cahi = new Teacher("shivam kumar","shivam.com",123)
console.log(cahi);
cahi.addCource()
