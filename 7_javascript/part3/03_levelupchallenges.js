/*
1. Write a 'for' loop that loops through the array
["green tea", "black tea", "chai", "oolong tea" ]' and
stops the loop when it finds ""chai"'.
Store all teas before ""chai"' in a new array named
selectedTeas'
*/

let tea=["green tea", "black tea", "chai", "oolong tea"]
let selectedTeas=[]
for(let i=0 ; i<tea.length;i++)
{
    if(tea[i]=='chai'){
       break;
    }
   selectedTeas.push(tea[i])
}
console.log(selectedTeas);

/*
2. Write a 'for' loop that loops through the array
["London", "New York", "Paris", "Berlin"]' and skips
""Paris"'.
Store the other cities in a new array named
'visitedCities'.
*/

let city = ["London", "New York", "Paris", "Berlin"]
let visitedCities=[]

for(let i = 0; i < city.length; i++){
   if(city[i]==='paris'|| city[i]==="Paris"){
      continue;

   }
   visitedCities.push(city[i])
   
}

/*
3. Use a 'for-of' loop to iterate through the array '[1,
2, 3, 4, 5]' and stop when the number '4' is found.
Store the numbers before '4' in an array named
smallNumbers' .
*/

let no=[1,2,3,4,5];
let smallNumbers=[];

for (const num of no) {
   if(no===4)
   {
      break;
   }
   smallNumbers.push(no);
}
console.log(smallNumbers);
