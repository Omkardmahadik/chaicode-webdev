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

// if u dont want to return use in function 
// its a shortcut of function
let adds = (n1,n2)=>(2+3)
console.log(`add=${adds()}`);

/*
4. Write a function named 'processTeaOrder' that takes
another function, 'makeTea', as a parameter and calls it
with the argument ""earl grey"'.*/

function makeTea(typeOfTea)
{
   return `maketea:${typeOfTea}`
}

function processTeaOrder(teafunction)
{
  return teafunction('earl grey')
}

processTeaOrder(makeTea)


function createteamaker(){

}
function tea(teaType){
    return "making green tea"
}
let teamaker=tea()




