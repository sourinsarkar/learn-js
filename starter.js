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


