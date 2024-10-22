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
   // Convert input to number
   const num = Number(input);
 
   // Check if the input is a number and is not NaN
   if (!isNaN(num) && typeof input !== 'string') {
     return "I'm a number!";
   }
   // Check if the input is a string
   else if (typeof input === 'string') {
     return "I'm a string!";
   } else {
     return "I'm something else!";
   }
 }
 
 // Example usage:
 console.log(whatAmI(2));        // Output: I'm a number!
 console.log(whatAmI("hello"));  // Output: I'm a string!
 console.log(whatAmI(null));     // Output: I'm something else!
 console.log(whatAmI(undefined)); // Output: I'm something else!
