function setUerName(username){
    this.username = username
    console.log('called..');
}

function CreateUer(userName,email, age){
    setUerName.call(this,userName)
    this.email = email
    this.age =age
}

const user = new CreateUer("shivam","shivam.kumar@ksolves.com",22)
console.log(user);