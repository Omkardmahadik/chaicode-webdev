/* 1: Declare an array named teaFlavors
the strings "green_tea"`, "black
tea"`.
Access the first element of the
in a variable named `firstTea`·*/

/* notes
  [0]-> ise indexing bolte he jis ham array ko access kar sakhte he
*/
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
`softCopyTeas=change in both array`. >
*/

let popularTeas = ["green tea", "oolang tea", "chai"]

popularTeas

console.log(popularTeas);

/*
7: You have an array named 'topCities' containing
"Berlin", "Singapore", and "New York".
Create a hard copy of this array named
`hardCopyCities =change in single array`.
*/
 
let topCities =["Berlin","Singapore","New York"]
let hardCopyCities = [...topCities]
// let hardCopyCities = topCities.slice() //works same
// topCities.pop()

// console.log(topCities);

console.log(hardCopyCities);

// rest and spread operator(later)
// console.log([...cities.hardCopyCities]);


/**
 8. You have two arrays: europeanCities' containing
"Paris" and "Rome", and asianCities' containing
"Tokyo" and "Bangkok"`.
Merge these two arrays into a new array named
'worldCities'.
*/

let europeanCities=["paris","Rome"]
let asianCities=["Tokyo","Bangkok"]

// worldcities = europeanCities.concat(asianCities)
worldcities = [...asianCities,...europeanCities]
console.log(worldcities);

/*
 9. You have an array named 'teaMenu' containing
"masala chai", "oolong tea", "green tea", and
"earl grey",
Find the length of the array and store it in a
variable named `menuLength`.
*/

let teamenu = ["masala chai","oolong tea","green tea","earl grey"]

menulength=teamenu.length

console.log(menulength);

/*
10. You have an array named `cityBucketList' containing
"Kyoto", "London", "Cape Town", and
"Vancouver",
Check if "London" is in the array and store the >
result in a variable named 'isLondonInList`.
*/
let cityBucketList=["Kyoto", "London", "Cape Town","Vancouver"]

// let isLondonInList=cityBucketList[1]
let isLondonInList=cityBucketList.includes("London")

console.log("isLondonInList:",isLondonInList);

