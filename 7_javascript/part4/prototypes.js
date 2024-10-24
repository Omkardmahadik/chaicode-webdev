// __ -> dunder

let computer = {cpu:10};
let lenovo = {
    screen:"hd",
    __proto__: computer
}
let hardware = {};

// console.log(`lenovo`,lenovo.__proto__);
console.log(`lenovo`,lenovo.__proto__);
// console.log(`lenovo`,computer.__proto__);
