// const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls cryptoygraphy and network 
//     setTimeout(function(){
//         // console.log('Promishes in javascript');
//         console.log('Async task 1.');
//         resolve()
//     },1000)
// })

// jab hum resolved karege tab .then se connect hoga..
// promiseOne.then(function(){
//     console.log('Async task 1 is resolved..');
// })


// new Promise(function(resolve,reject){
//     console.log("Async task 2");
//     resolve();
// },1000).then(function(){
//     console.log("Async task 2 is resolved......");
// })


// const promisethree = new  Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({userName:"Chai Aur Code",email:"chailandCode@gmail.com"})
//     },1000)
// })


// promisethree.then(function(user){
// console.log(user.userName,user.email);
// console.log(user);
// })


const promisheFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({userName:"shivam",password:"1234"})
        }
        else{
            reject("Error something Went Wrong.....")
        }
    },1000)
})

// promisheFour.then((user)=>{
// console.log(user);
// return user.userName;
// }).then((userName)=>{
// console.log(userName);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>{
//     console.log("promishes is  either resolved or rejected..");
// })



// const promisheFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({userName:"javascript",password:"java4@gmail.com"})
//         }
//         else{
//             console.log("ERROR JS SOMETHINGS WRONG");
//         }
//     },1000)
// })


// promisheFive.then()

// async function consumedPromisheFive(){
//     try{
//         const resoponce = await promisheFive
//         console.log(resoponce);
//     }
//     catch(error){
//         console.log(error);
//     }
// }


//  hum await uss place pe use karege jaha pe humlog ko data lane me thoda time lagat hai..
// async function getallusers(){
//     try{
//         const responce = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await responce.json()
//         console.log(data);
//     }
//     catch(error){
//         console.log("Error",error);
//     }
// }

// getallusers()



// ye jo hai same upper wala code hai using.then

// fetch('https://jsonplaceholder.typicode.com/users').then((resoponce)=>{
//     return resoponce.json()
// }).then((data)=>{
//     console.log(data);
// })


fetch('https://api.github.com/users/hiteshchoudhary').then((responce)=>{
    return responce.json()
}).then((data)=>{
    console.log(data);
})