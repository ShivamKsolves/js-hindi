"use strict" //Terat all js code with newer version

// alert(3+3 ) we are using node.js not browser

// console.log(3+3);console.log("shivam");

let name="shivam"
let age=22;
let isLoggedIn = false


// console.table([name, age,isLoggedIn]);

console.log(typeof "shivam");

console.log(typeof null); // object

console.log(typeof undefined);

// Premitive datatypes
// Number
// BigInt
// String
// Boolean
// null - standalone value
// undefined - Value not defind
// sumbol - unique 


// Nonpremitives (Reference)

// object array functions 



const id= Symbol("123")

const  anotherId =Symbol("123")

// console.log(typeof anotherId);

// console.log(id);
// console.log(anotherId);
// console.log(id==anotherId) 

const herso=['Mahadev','Dev','Vishnu']
let myobj={
    name:'shivam',
    age:21,
}
const myfunction=function(){
console.log('Hello World');
}

// console.log(typeof herso);
// console.log(typeof myobj);
// console.log(typeof myfunction) // function ojbect




// Stack -all premitive stack
// heap - all non premitive

let myyoutubename ="shivamkumar.com"
let anothrename = myyoutubename
anothrename ="shivam kumar singh"

// console.log(myyoutubename);
// console.log(anothrename);

let username ={
    name:"shiavm",
    age:21,
    gmail:"shivam.@gmail.com"
}
console.log(username);

let usertwo=username

usertwo.gmail="shivam.kumae@ksolves.com"

console.log(username); //Heap
console.log(usertwo);

