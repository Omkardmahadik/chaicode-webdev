// Encapsulation 
/*encapsulation ka matlab hota hai ek object ke andar variables (data) aur functions (methods) ko ikattha karna aur unhe bahar ke code se control aur secure rakhna.*/


class BankAccount {
    #balance = 0  //user cant access the variable only dev can access

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }
    getBalance() {
        return `$ ${this.#balance}`
    }
}
let acc = new BankAccount(100);
// console.log(acc.getBalance());


// Abstraction

class coffee {
    start() {
        // call db
        return 'starting the machine'
    }
    brewcoffee() {
        // complex calculation
        return `brewing coffee`
    }

    pressbutton() {
        let msg1 = this.start();
        let msg2 = this.brewcoffee();
        return `${msg1} + ${msg2}`
    }
}

let mymachine = new coffee();

console.log(mymachine.start());
console.log(mymachine.brewcoffee());
console.log(mymachine.pressbutton());

// polymorpism
/**
 Polymorphism ka matlab hota hai "one name, multiple forms." Yeh ek concept hai object-oriented programming mein, jisme ek function ya method different classes mein different tareeke se behave karta hai, par uska naam same hota hai.
 */
class Bird {
    fly() {
        return `flying...`;
    }
}

class penguin extends Bird {
    fly() {
        return `penguin can fly`;
    }
}

let bird = new Bird()
let Penguin = new penguin()
console.log(bird.fly());
console.log(Penguin.fly());

// static method
// no method can access static method
// only class can access the static method
class Calculator {
    static add(a, b) {
        return a + b;
    }
}
/* you cannot access using another variable static method only by accessing using class only -> try this
*/
/*let calcs = new Calculator()
console.log(calcs.add(2,3));*/


let calc = new Calculator()
console.log(Calculator.add(2, 3));


// Getter
/**
 Programming mein getter ek method (function) hota hai jo kisi object ke private ya protected property ki value ko access ya "get" karne ke liye use hota hai. Getter ka fayda yeh hai ki yeh object ke data ko safe aur control mein rakhta hai, taaki woh bina permission ke directly modify na ho.
 */

class Employee {
    #salary //hash->hide the data
    constructor(name, salary) {
        if (salary < 0) {
            throw new Error("salary cannot be in  negative");
            
        }
        this.name = name;
        this.#salary = salary;
        // this._salary = salary;
    }
    get salary() {
        return `you are not allowed to se salary`;
    }
    set salary(value) {
        if (value < 0) {
            return `invalid salary`;
        }
        else {
            this._salary = this.salary;
        }
    }
}
let emp = new Employee("omkar", 10);
console.log(emp._salary);
console.log(emp.salary);
//  console.log(emp.salary());

// setter
/**
 setter ek method (function) hota hai jo kisi private ya protected property ki value ko set ya update karne ke liye use hota hai. Setter ka purpose hai data ko safely modify karna, aur kuch conditions laga ke control karna ki value kaise change ho sakti hai.
 */