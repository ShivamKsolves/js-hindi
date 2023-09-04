let a=100
// var b=20
// const c=30
// global scope
var c=300
if (true){
    // iske under ko humlog block scope bolate hai..
    let a=10
    const b=20
    var c=30  
    // console.log('INNER ', a);
}
// console.log(a);
// console.log(b);
// console.log(c);
// {}// ikso scope bola jata hai..



function One(){
    const userName = "shivam"

    function two(){
        const website = "Youtube"
        console.log(userName);
    }
    // console.log(website);
    two()
}

// One()

console.log(addOne(7));
function addOne(num){
    return num+1
}

two(10)// yaha pe ye erros through karege  this is called hoisting..
const two = function (num){
    return num+2
}

// console.log(tow);