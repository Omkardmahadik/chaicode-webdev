// closures are functions

function outer(){
 let counter=5;
 return function(){
    counter++
    return counter;
 }
}
let outputs = outer()
console.log(outputs());
