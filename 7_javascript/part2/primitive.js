// number
let score=10 
let rescore= new Number(100);

// ()=>parenthesis
console.log(score);
console.log(score.valueOf());

console.log(rescore);

//type of : means what is typr of  data is eg no,string
console.log(typeof(score)); //number
console.log(typeof rescore); //object

// boolean
let isbool=true
let isrebool=new Boolean(true) //nc

console.log(isrebool);

// null and undefined
// by default data is undefined
let first_name =undefined
console.log(first_name);

// null is ued for when we dont know the data (empty value)
let middle_name =null
console.log(middle_name);

// string

// various type of string
let mystring = "hello"
let mystring1 = 'hello'

// for using multiple strings
let oldgreet = mystring + " "+ "omkar";
console.log(oldgreet);

// good alternate (template literals)
let greetmessage=`hello ${mystring} ! ${oldgreet}`;
let demo1 = `Value is ${2+2}`

console.log(greetmessage);
console.log(demo1);

// unique
let sm1 = Symbol("om")
let sm2 = Symbol("")

console.log(sm1==sm2);
console.log(sm1);
