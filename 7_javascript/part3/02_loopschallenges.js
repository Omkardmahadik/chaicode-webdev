/*
1. Write a while loop that calculates the sum of all
numbers from 1 to 5 and stores the result in a variable
named 'sum`.
*/
let sum = 0;
let i = 1;
while (i <= 10) {
    sum = sum + i
    i++//increment
}
console.log(sum);

/*
2. Write a while loop that counts down from 5 to 1 and
stores the numbers in an array named 'countdown'`.


*/

let countdown=[];
let j=5;

while (j > 0) {
    countdown.push(j)
    j--;
}
console.log(countdown);


/*
3. Write a 'do while loop that prompts a user to enter
their favorite tea type until they enter ""stop"`.
Store each tea type in an array named `teaCollection'.
*/
let teacollection=[]
let user
do{
    user=prompt(`Enter your tea type: (type "stop" to finish)`);
    if(user!=="stop")
    {
       teacollection.push(user)
    }
}
while(user!=="stop")

