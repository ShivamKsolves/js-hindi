const user={
    name:'shivam',
    price:1999,
    welcomeMessage:function(){
        console.log(`Welcome to website ${this.name} and price is ${this.price}`);
        console.log(this);
    }
}


// user.welcomeMessage()

// user.name ='satyam'
// user.welcomeMessage()

// console.log(this);


// function Chai(){
//     let userName= "shivam"
//     console.log(this.userName);
// }

// Chai()



// const Chai = function(){
//     const userName = "satyam"

//     console.log(this.userName);
// }

// Chai()



//  Arrow function...
const Chai = () =>{
    let userName ='shivam'
    console.log(this.userName);
}

// Chai()



// const addTwo = (num1, num2)=>{
// return num2+num1
// }

// yadi app curly braces use karte hai tab appko retuen use karna hi hoga..
// Both function similar 
// const addTwo = (num1,num2) => (num1+num2) // implicat return defind inside..

const addTwo = (num1,num2) => ({userName:'shivam Kumar singh'}) // jab aap object return kar rahe hai tab appko aise hi retu karna padega.

// value = addTwo(10,2);
// console.log(value);




// immediate invoked function Expression..;
(function chai(){
    console.log('DB connected....');
})();

(() =>{
    console.log('DB connected2..');
})()



