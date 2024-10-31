// Encapsulation 
/*encapsulation ka matlab hota hai ek object ke andar variables (data) aur functions (methods) ko ikattha karna aur unhe bahar ke code se control aur secure rakhna.*/


class BankAccount{
    #balance=0  //user cant access the variable only dev can access

    deposit(amount)
    {
        this.#balance += amount;
        return this.#balance;
    }
    getBalance(){
        return `$ ${this.#balance}`
    }
}
let acc = new BankAccount(100);
// console.log(acc.getBalance());


// Abstraction

class coffee{
    start()
    {
        // call db
        return 'starting the machine'
    }
    brewcoffee()
    {
        // complex calculation
        return `brewing coffee`
    }

    pressbutton()
    {
      let msg1=  this.start();
      let msg2=  this.brewcoffee();
      return `${msg1} + ${msg2}`
    }
}

let mymachine = new coffee();

console.log(mymachine.start());
console.log(mymachine.brewcoffee());
console.log(mymachine.pressbutton());

// polymorpism
