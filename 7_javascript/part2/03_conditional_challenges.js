//1: checking if a number is greater than another number: 
let n1 = 10
let n2 = 20

// {}->block of code
if (n1 > n2) {
    console.log("n1 is greater than n2");

}
else if (n2 > n1) {
    console.log("n2 is greater than n1");

}

//2: Checking if a string is equal to another string
let string1 = "omkar"
let string2 = "omkar"

if (string1 == string2) {
    console.log("pick another username");
}
else {
    console.log("you can pick the username");
}

//3: checking if a variable is number or not
let no = 10

if (typeof no === 'number') {
    console.log("variable is number");
}
else {
    console.log("variable is not");
}

//4: checking if a boolean value is true or false

Boolean=true

if(Boolean){
    console.log("boolean value is true")
}
else {
    console.log("boolean value is false");
    
}

// Checking if an array is empty or not:
let myarr=["item1"]

if(myarr.length===0)
{
    console.log("array is empty");
    
}
else{
    console.log("array is not empty");
}

//6: Write a JavaScript code to check if a number is even or odd using an if-else statement.
let n=11

if(n%2==0)
{
    console.log("number is even");
}
else if(n>=3)
{
    console.log("number is odd");  
}

/*7: Write a JavaScript code to check if a person is eligible to vote based on their age. If the age is 18 or above, they are eligible to vote, otherwise, they are not.*/

let age=18

if(age>=18)
{
    console.log("eligible to vote");    
}
else if(age<=18)
{
    console.log("not eligible to vote");
    
}