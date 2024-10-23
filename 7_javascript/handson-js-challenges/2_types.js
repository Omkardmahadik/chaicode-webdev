// Task 1:
// Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".

function stringToNumber(input)
{
   Number = Number(input)
   return isNaN(Number) ? "not a number" : Number;
}

no=stringToNumber("om")
// console.log(no);


// Task 2:
// Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.

function flipBoolean(input)
{
   return !Boolean(input) 
}
n=flipBoolean(true);
console.log(n);

// Task 3:
// Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"

function whatAmI(input) {
  if(!isNaN(Number) && Number.trim() !== '')
  {
    return"I'm a number!"
  }  
  else
  {
   return "I'm a string!"
  }

}
i=whatAmI("om")
// console.log(i);

// Task 4:
// Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.

function isItTruthy(input)
{
 if(input)
 {
    console.log(`truthy`);
 }
 else{
   console.log(`falsey`);
 }
}
let truth=isItTruthy("It's truthy!")

/*
function isItTruthy(input)
{
  return "It's truthy!"
}

if(input="It's truthy!")
{
 console.log(`truthy ${input}`);
}
else if(input="It's falsey!")
{
 console.log(`falsey ${input}`);
}*/