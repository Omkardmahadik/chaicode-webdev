const person ={
    name:`omkar`,
    greet(){
       console.log(`hello i am ${this.name} `);
    },
};

// when i call this function the output will be correct
person.greet();

// but in this scenario i want that full data goes to another variable but in this scenario the output will be same but the name will be undefined because the context will lost eg: i told u i am fan  and he sell the fan he thinks that i sell fans but context is different in summary: the memory not goes to one memory to second memory

const greetFunction = person.greet;
greetFunction();

const boundGreet = person.greet.bind({name:"naruto"})

boundGreet();

// bind call and apply