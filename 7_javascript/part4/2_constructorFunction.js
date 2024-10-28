// constructor functional
// ---------------------------------
// warning: This constructor function may be converted to a class declaration.ts(80002)
function person(name,age)
{
    // this -> placeholder can be a var or function
    this.name = name;
    this.age = age;
}

function car(make,model)
{
    this.make = make;
    this.model = model;
}

// let mycar =  new car("toyota","camry")
// let mycar =   car("toyota","camry") -> undefined

// console.log(car);

let mynewcar =  new car("mahindra","thar")
// console.log(mynewcar);

// ---------------------------------
function tea(type)
{
    this.type = type
    this.describe = function()
    {
        return `${this.type} ${2+2}`
    }
}
let lemontea= new tea("lemon")
console.log(lemontea);
console.log(lemontea.describe());

// ---------------------------------
function Animal(species)
{
    this.species = species
}

Animal.prototype.sound = function()
{
    return `${this.species} makes a sound`
};

let dog = new Animal("dog")
console.log(dog.sound());

let cat = new Animal("cat")
console.log(cat.sound());


// ------advance topics------
function Drink(name)
{
  if(!new.target)
  {
    throw new Error("dream must be called with new keyword");
  }
  this.name = name;
}
let teas  =  new Drink("teas");
let coffee = Drink("coffee")