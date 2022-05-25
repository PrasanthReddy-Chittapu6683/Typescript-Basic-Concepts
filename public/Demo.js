"use strict";
let test_name = 'Prasanth';
console.log(test_name);
const qurey_inputs = document.querySelectorAll('input');
qurey_inputs.forEach(element => {
    console.log(element);
});
const circle = (value) => {
    return typeof value === 'string' ? value : value * Math.PI;
};
console.log(circle(7.5));
// arrays
let names = ['asd', '4564', 'cvbcb'];
names.push('12ssdf');
console.log(names);
// objects
let data = {
    name: 'Prasanth',
    age: 50
};
console.log(data);
// Functions
let greet;
greet = () => {
    console.log('Hello');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
    return a + b;
};
add(1, 2, 'TT');
