// __ -> dunder

let computer = {cpu:10};
let lenovo = {
    screen:"hd",
    __proto__: computer
}
let hardware = {};

// 1 st way to use prototpe
// console.log(`lenovo`,lenovo.__proto__);
console.log(`lenovo`,lenovo.__proto__);
console.log(`lenovo`,computer.__proto__);

// 2 nd way

let genericcar = {tyres:5};
let tesla={
    driver:"ai",
};
Object.setPrototypeOf(tesla,genericcar);

// console.log(`tesla: ${tesla}`  , `Driver: ${genericcar}`)
// console.log(`tesla`,tesla);
// console.log(tesla.tyres);
console.log(`tesla`,Object.getPrototypeOf(tesla));

