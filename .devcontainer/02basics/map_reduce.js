// const coding =['c','c++','java','python','javascript','HTML']
// Generally for each return hota nahi hai..
// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item
// })



// console.log(values);

const myNums =[1,2,3,4,5,6,7,9,45,6,78,90]
// yadi app curly braces karte hai tab aapko return karne hoga..

// let values = myNums.filter((num)=>{
//     return num>4
// })


const new_Nums = []

myNums.forEach((number)=>{
    if(number<4){
        new_Nums.push(number)
    }
})

// console.log(new_Nums);




const books =[
    {title:'Books One',name:'friction',edition:1985,publish:1975},
    {title:'Books Two',name:'mechanics ',edition:1999,publish:1977},
    {title:'Books Tree',name:'non-friction',edition:1983,publish:1970},
    {title:'Books Four',name:'History',edition:1980,publish:1971},
    {title:'Books Five',name:'science',edition:1988,publish:1972},
    {title:'Books Six',name:'math',edition:1989,publish:1955},
    {title:'Books Seven',name:'stattics',edition:1989,publish:1976},
]

// const userBooks = books.filter((book)=>{
//     return book.name =='History'
// })


// const book = books.filter((bk)=> bk.publish >=2000)

// console.log(book);

// console.log(userBooks);



//  yadi app call back me curly brackes karte hai tab appko return mention karna padega..
// const myNumber =[19,2,3,4,5,6,7,9,45,6,78,90]

// let value = myNumber.map((num)=>{return num+10})


// THis is called chaning like at at time you can pass multiple condition..
// let value = myNumber.map((num)=> num*10)
//                     .map((num)=> num+1)
//                     .filter((number)=> number>100)
// console.log(value);




// reduce..



const myNum=[1,2,3,4,5,6]

// const myTotal = myNum.reduce(function(acc,currval){
//     return acc+currval
// },0)

const myTotal = myNum.reduce((acc,currentVal)=>(acc+currentVal),5)

// console.log(myTotal);




shopingCart =[
    {itemName:'js Cource',price:999},
    {itemName:'HTML Cource',price:499},
    {itemName:'Python Cource',price:1999},
    {itemName:'C Cource',price:699},
    {itemName:'Data science Cource',price:9999},
]


let total = shopingCart.reduce((acc,item)=>(acc+item.price),0)

console.log(total);


