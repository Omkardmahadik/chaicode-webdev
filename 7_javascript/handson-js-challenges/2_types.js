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
   bool = Boolean(input)
   
}
g=flipBoolean(true)
