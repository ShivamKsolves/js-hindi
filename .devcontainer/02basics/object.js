// console.log('Object');
// humlog object ko do tarike se create kar sakte  hai one literals({}) and anothet.object
// jo singalaton wala case hota hai Oo .object wale me hota hai

 const jsUser={
    name:'shivam',
    "fullname":"shivam kumar singh",
    age:21,
    email:'shivamkumarshivam583@gmail.com'
 }


//  const sumbol=  Symbol("key") // leaned about more

//  console.log(typeof Symbol);
//  console.log(jsUser.name);
//  console.log(jsUser['name']);
//  console.log(jsUser['fullname']); // yadi aapkse pass multiple hota hai tab appko sqaure se hi use kar sakte hai
//  jsUser.email ="shivam@ksolves.com"

//  console.log(jsUser.email);
//  Object.freeze(jsUser) // abb iske baad app kuch bhi change nahi kar sakte hai..

//  jsUser.name ="satyam"
//  console.log(jsUser.name);

jsUser.greeting = function(){
    console.log('Hello shivam kumar singh ');
}

jsUser.functionTwo = function(){
    console.log(`Hello js USER ${this.email}`);
}

// console.log(jsUser.greeting());
// console.log(jsUser.functionTwo());


//  singalton object..
//  const tinderUser = new Object()

 const tinderUser= {} // non singalton object
 tinderUser.id=10
 tinderUser.name="shivam"
 tinderUser.email="tinder@gmail.com"
 tinderUser.isLoggedIn =false
// console.log(tinderUser);

const regularUser={
    email:'Redular@gmail.com',
    fullName:{
        username:{
            firstname:'shivam',
            middleName:'kumar',
            LastName:'singh '
        }
    }
}

// console.log(regularUser.email);
// console.log(regularUser.fullName.username.firstname);
// console.log(regularUser.fullName.username  .las);
// console.log(regularUser.fullName?.username.first); // for opetaional safe purpose when fetching data  from API


const object1={1:"a",2:"b"}
const object2={3:"C",4:"D"}

// const object3={object1,object2}

// const obj3= Object.assign({},object1,object2) // this is good way to assign object


const obj3 ={...object1,...object2}

// console.log(object3);

// console.log(obj3);


// console.log(Object.keys(tinderUser)); // fetching all keys
// console.log(Object.values(tinderUser));

// console.log(Object.keys(obj3));

// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('firs')); // checking our object has value or not

const jsUser1={
    name:'shivam',
    "fullname":"shivam kumar singh",
    age:21,
    email:'shivamkumarshivam583@gmail.com'
 }


//  const {email} = jsUser1

const {email:ema} = jsUser1 // it is called destructor
 console.log(ema);