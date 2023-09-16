// function  multiply5(num){
//     return num*5
// }
// multiply5.power =10;

// console.log(multiply5(5));
// console.log(multiply5.power);
// console.log(multiply5.prototype);

function CeateUser(userName, SCORE)
{
    this.userName = userName
    this.SCORE = SCORE
}


CeateUser.prototype.increment = function(){ 
    this.SCORE++
}

CeateUser.prototype.printme = function(){
    console.log(`score  is ${this.SCORE} `);
}
const chai = new CeateUser("Chai",20)
const tea = CeateUser("Tea",25)


chai.printme()
