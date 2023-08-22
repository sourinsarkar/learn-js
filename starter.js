// "use strict";
// Variables

// console.log(me);
// console.log(job);
// console.log(dob);

// var me = 'Sourin';
// let job = 'Student';
// const dob = 2002;

// -------------------------------------------------------------------------------------------------------

// Functions

// console.log(funDec(2, 3));
// console.log(funEx(2, 4));
// console.log(funArrow);
// console.log(funArrow(2, 5));

// function funDec(a, b) {
//     return a + b;
// }

// const funEx = function (a, b) {
//     return a + b;
// }

// const funArrow = (a, b) => a + b;

// -------------------------------------------------------------------------------------------------------

// this: keyword

// console.log(this);

// const age = function (birthYear) {
    // return (2023 - brithYear);
//     console.log(2023 - birthYear);
//     console.log(this);
// };

// console.log(age(2002));

// ----------------------------------------

// this: keyword in arrow function

// const age = (birthYear) => {
//     console.log(2023 - birthYear);
    // return (2023 - birthYear);
//     console.log(this);
// };

// console.log(age(2002));

// ----------------------------------------

// const sourin = {
//     name: 'Sourin',
//     dob: 2002,
//     calcAge: function() {
        
//         const isMillenial = () => {
//             console.log(this);
            // console.log(this.dob >= 1981 && this.dob <=1996);
//         };
//         isMillenial();
//         console.log (2023 - this.dob);
//     },

//     greet: () => console.log(`Hey ${this.name}`)
// };

// console.log(sourin.calcAge());

// ----------------------------------------

// const addNums = function (a, b) {
//     console.log(arguments);
//     return a + b;
// }

// console.log(addNums(2,3,1,1));

// ----------------------------------------

// const greet = x => console.log(x);
// greet('Hello');

// const some = 10;
// const something = (some <= 21) ? () => console.log('Eligible') : console.log('In-eligible');
// something();

// ----------------------------------------

// Spread OP

// const foo = function () {
//     console.log(arguments);
// }

// foo(1,2,3,4,5);

// const foot = (...n) => {
//     console.log(n);
// }

// foot(1,2,3,4,5);

// const foo = ['Hey', 'Dumbo'];
// console.log(...foo);

// copying array

// const foo1 = [...foo, 'How','are','you?'];
// console.log(foo1);
// console.log(...foo1);

// cloning using spread op

// const poo1 = ['Hello'];

// const poo2 = poo1;
// const poo21 = [...poo1];

// poo2.push('Seya');
// poo21.push('Seya','Heya');

// console.log(poo1);
// console.log(poo2); // shallow copy
// console.log(poo1);
// console.log(poo21); // deep copy

// Spread with objects

// const too = {
//     x: 1,
//     y: 2
// }

// const soo = {
//     z: 3
// }

// const newthing = {...too, ...soo};
// console.log(newthing);

// Rest Parameter

// const wow = function(...args) {
//     console.log(args);
// }

// wow(1,2,3,4,5,'hello');

// Passing multiple arguments to a function using Spread Op

// function someFun(x,y,z) {
//     return (x + y + z);
// }

// const someInputs = [1,2,3];

// console.log(someFun(...someInputs));
// ----------------------------------------------------------------------------------------------------------------------


