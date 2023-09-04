// console.log('Loops... in javascript');
// console.log('itterations in javascript...');


// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if (element===5){
//         console.log('5 is best Number.....');
//     }
//     console.log(element);
    
// }

// console.log(index);


// for (let index = 0; index < 20; index++) {
//     const Number = index;
//     if (Number===10){
//         console.log('10 Number Detcted..');
//         break;
//     }
//     if (Number===5){
//         console.log('5 Number Detcted..');
//         continue;
//     }
//     console.log(`Number is ${Number}`);
    
// }




// while loops

// let value=1
// while (value<10) {
//     console.log(value);
//     value =value+2
    
// }

// do {
//     console.log('value is',value);
//     value++
    
// } while (value<10);



// const arr=[1,2,3,4,5,6,7,8,9,10,11]
//  for(const num of arr){
//     console.log(num);
//  }

//  const greetings="hello world"

//  for(const greet of greetings){
//     console.log(greet); 
//  }




// For unique value..
const map=new Map()
map.set("IN","INDIA")
map.set("USA","UNITED STATE OF AMERICA")
map.set("FR","FREANCE")
map.set('IR',"IRELAND")
map.set('IR',"FREENLAND")

// console.log(map);

// for( key of map){
//     console.log(key);
// }

// lekin yadu app kay and value alag alag lena cahte  hai tab aap ye use kar sakte hai..

// for(const[key, value] of map){
// console.log(`key ${key} value ${value}`);
// }

// map is iterable but object is not...
const myObject ={
    name:'shivam',
    age:21,
    email:'shivamkumar@gmail.com'
}


for(key in myObject){
    // console.log(key);
    // console.log(`key is ${key} and their value is ${myObject[key]}`);
}


const programming =['c','c++','java','python','javascript','html']
// for (const key in programming){
//     console.log(`${programming[key]}`);
// }



// programming.forEach(function (val){
//     console.log(val);
// })

// programming.forEach((item)=>{
// console.log(item);
// })



// function printme(){
//     console.log('Hello ...');
// }

// programming.forEach(printme)


// we can use like this type.....
programming.forEach((item,index,arr)=>{
console.log(`item of array is ${item} index is ${index} ${arr}`);
})