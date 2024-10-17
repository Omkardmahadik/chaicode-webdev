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
confirmOrder()


function order = ()=>{
  console.log("hello world");
}

order();