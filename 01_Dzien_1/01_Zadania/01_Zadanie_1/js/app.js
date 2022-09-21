// Implementacja map

const myNumber = [1, 2, 3, 4];

console.log(myNumber.map((value, index, array) => {
    return value * 2;
}));

Array.prototype.customMap = function(callback) {

    if (typeof callback !== 'function') {
        throw new TypeError('Map callback must be a function');
    }

    const newArray = [];

    for (let i = 0; i < this.length; i++) {
        newArray[i] = callback(this[i], i, this);
    }

    return newArray;

}

console.log(myNumber.customMap((value, index, array) => {
    return value * 2;
}));


// Implementacja reduce

const myNumbers = [1, 2, 3, 4];

console.log(myNumbers.reduce((prev, next, index, array) => prev + next)); // 10
console.log(myNumbers.reduce((prev, next) => prev + next, 5)); // 15

Array.prototype.customReduce = function(callback, initialValue) {

    if (typeof callback !== 'function') {
        throw new TypeError('Reducers must be a function');
    }

    let finalValue = initialValue;
    let index = 0;

    if (finalValue === undefined) {
        finalValue = this[0];
        index = 1;
    }

    for (; index < this.length; index++) {
        finalValue = callback(finalValue, this[index], index, this);
    }

    return finalValue;

}

console.log(myNumbers.customReduce((prev, next) => prev + next)); // 10
console.log(myNumbers.customReduce((prev, next) => prev + next, 5)); // 15





// function sayHello(name) {
//     console.log(`Hello ${name}!`);
// }
//
// console.log(sayHello('John'));
//
//
// function sum(a = 10, b) {
//     return a + b;
// }
//
// console.log(sum(undefined, 5));
//
// let myPow = function (a) {
//     return a ** 2;
// //    Math.pow(a, 2)
// }
//
// console.log(myPow(3));
//
// (function (name) {
//     console.log(`Hello ${name}!`);
// })('John');
//
// let x = function y() {
//     console.log('x/y');
// }
//
// x();
// // y(); // nie zadziala
//
// function abc(a) {
//     return a * 3;
// }
//
// const cmd = a => a * 3;
// const bkd = (a) => a * 3;
//
// function wke() {
//     return 5;
// }
//
// const mde = () => 5;
//
// mde()
//
// function kmd(a, b) {
//     console.log('Hello!');
//     return a + b;
// }
//
// const aPlusB = (a, b) => {
//     console.log('Hello!');
//     return a + b;
// }
//
// const car = {
//     brand: 'Tesla',
//     model: 'S'
// }
//
// function  generateCar(brand) {
//     return {
//         brand: brand,
//     }
// }
//
// generateCar('Fiat');
//
// // const generateCar1 = brand => {
// //     return {
// //         brand: brand,
// //     }
// // } nie dziala
//
// const generateCar2 = brand => ({ brand: brand })
//
// setTimeout(() =>
//     console.log('Hello'), 5000
// );
//
// const myNumbers = [1, 11, 3, 33, 333, 4, 555];
//
// myNumbers.sort((a, b) => a - b);
//
// myNumbers.forEach(function(value, index, array) {
//     console.log(value, index, array);
// })
//
// console.log('map');
// console.log(myNumbers.map(function(value, index, array) {
//     console.log(value, index, array);
//     return value ** 3;
// }));
//
// console.log('filter');
// console.log(myNumbers.filter((value) => value % 2 !== 0));
//
//
// console.log('reduce');
//
// console.log(myNumbers.reduce(function(prev, next, index, array) {
//     return prev + next;
// }));
//
// // 1 => prev next 11 => prev + next => 1 + 11 => 12
// // 2 => prev 12 next 3 => prev + next => 15
// // 3 => prev 15 next 33 => 48