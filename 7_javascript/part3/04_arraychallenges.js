/* 1: Declare an array named teaFlavors
the strings "green_tea"`, "black
tea"`.
Access the first element of the
in a variable named `firstTea`·*/

let teaFlavors = [
    "green_tea",
    "blacktea"
]

// 2nd way to use array
// let teaFlavorss= new Array[
//     "green_tea",
//     "blacktea"
// ]

let firstTea = teaFlavors[0]
console.log(firstTea);

/* 2: Declare an array named 'cities' containing
"London", "Tokyo", "Paris", and "New York".
Access the third element in the array and store it
in a variable named 'favoriteCity`.*/

let cities = ["London", "Tokyo", "Paris", "New York"]

let favoriteCity = cities[3]
console.log(favoriteCity);

/* 3: You have an array named 'teaTypes` containing
"herbal tea", "white tea", and "masala chai"`.
Change the second element of the array to "jasmine
tea".
*/

let teaTypes = ["herbal tea", "white tea", "masala chai"]

teaTypes[2] = "jasminetea"

console.log(teaTypes);

/* 4: Declare an array named cities Visited containing
"Mumbai" and "Sydney",
Add "Berlin" to the array using the `push` method.*/

let citiess = ["Mumbai", "sydney"]

cities[2] = "Berlin" //..
cities.push("Berlin")

console.log(citiess);

/* 5: You have an array named 'teaOrders' with '"chai"`,
""iced tea", "matcha", and "earl grey"`.
Remove the last element of the array using the 'pop'
method and store it in a variable named 'lastOrder`.*/


let teaOrders = ["chai", "icetea", "matcha", "earl grey"]

// remove the last item of the array
teaOrders.pop()
lastorder = teaOrders
console.log(lastorder);

/* 6: You have an array named `popularTeas` containing
"green tea", "oolong tea", and "chai"`.
Create a soft copy of this array named
`softCopyTeas`. >
*/

let popularTeas = ["green tea", "oolang tea", "chai"]

popularTeas

console.log(popularTeas);

/*
7: You have an array named 'topCities' containing
"Berlin", "Singapore", and "New York".
Create a hard copy of this array named
`hardCopyCities`.
*/
 
let topCities =["Berlin","Singapore","New York"]
let hardCopyCities = [...topCities]

console.log(topCities);
console.log(hardCopyCities);