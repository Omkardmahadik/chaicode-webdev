/*
1. Write a function named 'makeTea' that takes one
parameter, 'typeOfTea`, and returns a string like
""Making green tea"' when called with '"green tea"'.
Store the result in a variable named 'teaOrder'.
*/

// ()-> plceholders(parameters)
function makeTea(typeOfTea)
{
  //ends the line 
  return `Making${typeOfTea}` 
  console.log();
  
}
let teaOrder = makeTea("green tea")
console.log(teaOrder);


function add(n1,n2){
    return `sum= ${n1+n2}`
}
let sum=add(2,3)
console.log(sum);

/*
2. Create a function named 'orderTea' that takes one
parameter, 'teaType' . Inside this function, create
another function named 'confirmOrder' that returns a
message like '"Order confirmed for chai"'.
Call 'confirmOrder' from within `orderTea' and return the
result.*/

function orderTea(teaType){
    function confirmOrder(){
      return `Order confirmed for chai`
    }
    return confirmOrder()
}
// confirmOrder("red tea")

/*3. Write an arrow function named 'calculateTotal' that
takes two parameters: 'price' and 'quantity'. The
function should return the total cost by multiplying the
`price' and 'quantity'.
Store the result in a variable named 'totalCost' .
*/
// const calculateTotal=(price,auantity)=>{
//     return price*auantity;
// }

// 2nd way - implicit return no use of return
const calculateTotal=(price,auantity)=> price*auantity;

let totalCost=calculateTotal(3,5);
console.log(`Total cost=${totalCost}`);



/*
4. Write a function named 'processTeaOrder' that takes
another function, 'makeTea', as a parameter and calls it
with the argument ""earl grey"'.*/

// function makeTea(typeOfTea)
// {
//    return `maketea:${typeOfTea}`
// }

// function processTeaOrder(teafunction)
// {
//   return teafunction('earl grey')
// }

// let Order=processTeaOrder(makeTea)
// console.log(order);

// learn higher order function

//write a function named 'createteamaker' that returns another function. the returned function schould take one parameter, 'tea type', and return a message like "making green tea"`. store the returned function in a variable named `teamaker` and call it with "green tea"`.
// function createteamaker(){
//   return function tea(teaType){
//     return `making green tea ${teaType}`
// }
// }

// let teamaker=createteamaker()
// console.log(teamaker(`lemon tea`));


function createteamaker(name){
  return function tea(teaType){
    return `making green tea ${teaType} ${name}`
}
}
//  what is called
let teamaker=createteamaker("omkar")
console.log(teamaker(`lemon tea`));



