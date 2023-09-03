// it is a data type where you can store collection of elements at a time
// const myarr=[1,2,3,4,5,6,7,8]

// const myarray= new  Array(1,6,8,9,0,5,6,7)

// console.log(myarr.length);
// console.log(myarr[0]);
// console.log(array2.length);

// myarray.push(10)
// myarray.push(16)
// console.log(myarray);
// myarray.pop()
// myarray.unshift(101) // they adding first place
// console.log(myarray);
// myarray.shift() // thet remove first place elements
// console.log(myarray);

// console.log(myarray.includes(8));
// console.log(myarray.indexOf('101'));

// const newAarray = myarray.join() // our array is string type

// console.log(myarray);
// console.log(newAarray);

// console.log("A", myarray);

// const newAarray = myarray.slice(1,3)
// console.log(newAarray);
// console.log("B", newAarray);

// const New1Array = myarray.splice(1,3) // jab hum splice use karte hai tab utana element main arrya se remove ho jata hai.
// console.log(`Here i used Splice ${New1Array}`);
// console.log("A", myarray);


const marbal_heros = ["marbal","throws"]
const dc_heros = ["superman","flash","batman"]

// marbal_heros.push(dc) // here yadai hum push karte hai tab Oo dc ko 1 string ke jaise behave karte hai

// const all_heros = marbal_heros.concat(dc_heros)

// console.log(all_heros);


const all_heros= [...marbal_heros,...dc_heros] // isko humlog spread operation kahate hai

// console.log(all_heros);

const anotheArray = [1,2,3,[4,5,6,7],[8,9,[10,11,17]]]

// console.log(anotheArray);

const usable_array = anotheArray.flat(Infinity) // ikso help se aap sab ko eak me hi add kar sakte hai.
// console.log(usable_array);

// console.log(Array.isArray("shivam")); 
console.log(Array.from("Shivam")); // conversting as a array

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)); // of humare sare value ko array  me convert karta hai