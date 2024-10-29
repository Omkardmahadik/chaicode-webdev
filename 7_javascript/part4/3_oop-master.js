// revise old topics
let car ={
    bname:"toyota",
    models:"camry",
    year:1800,
    start: function()
    {
        return `${this.bname} car got started in ${this.year}`
    },
};
console.log(car.start());

// constructor

function person(name,age,info)
{
    this.name = name;
    this.age = age;
    this.info = info;
}

let john = new person("john",20,"john is a web-dev");
console.log(john);

// prototype
function Animal(type)
{
    this.type = type;
}

Animal.prototype.speak = function()
{
    return `${this.type} makes a sound`;
};

Array.prototype.omkar = function(){
    return `custom method ${this}`;
};

let myarr=[1,2,3,4]
console.log(myarr.omkar());
let myarrs={1:"omkar",2:"sai"}
console.log(myarrs.omkar);