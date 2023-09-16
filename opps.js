const user={
    username:"shivam kumar",
    password:"Shivam@123",
    loginCount:8,
    isSigned : true,

    getUserDetails:function(){
        // console.log("Got User details  from database..");
        // console.log(`userName is ${this.username}`);
        console.log(this);
    }


}


// console.log(user);
// console.log(user.getUserDetails());
// console.log(this);


const users = function(name, age,profile){
    this.name = name,
    this.age=age,
    this.profile = profile
    // ye implict define hota hai.
    return this
}


// yadi app new keyword nahi dege tab ye apna alag alag object dega.......
const userOne = new users("shivam",21,"Software Developer")

const userTwo = new users("satyam",22,"Seniour Software Developer")
console.log(userOne);