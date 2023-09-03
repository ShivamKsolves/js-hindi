function addTwoNUmbers(number1, number2){
    return number1+number2
    // console.log(number1+number2);
}

// const value = addTwoNUmbers(10,15);
// addTwoNUmbers(10,28)
// console.log(value);



function loginUserName(username){
    if(!username){
        console.log("Hey You should enter first user name")
        return
    }
    return `${username} Logged IN`
}

// console.log(loginUserName('shivam'));
// console.log(loginUserName());



// this is called rest operator you can pass multiple vaue at a time
function calucateCartPrice(... num){
    return num
}

// console.log(calucateCartPrice(10,10,20,30));

const user = {
    name:"hitesh",
    age:24,
    gmail:"hitesh34@gmail.com",
    price:900
}

function handelObject(anyObject){
    console.log(`userName is ${anyObject.name} and price is ${anyObject.price}`);

}

handelObject(user)

// we can pass object as well as array also..