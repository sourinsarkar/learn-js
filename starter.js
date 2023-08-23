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


// --------------------------------------------------------------------------------------------


// Destructuring

// const r = {
//     name: 'Sourin\'s Rasoi',
//     location: 'Sourin City, Bangaluru, Karnataka, India',
//     categories: ['North Indian', 'South Indian', 'Kannadiga', 'Khatta'],
//     starterMenu: ['Idli', 'Aloo Bonda', 'Upma', 'Uttappam', 'Poha', 'Sabudana'],
//     mainMenu: ['Shahi Thali', 'Dum Biryani', 'Dal Bati Churma'],
//     order: function (starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },

//     openingHours: {
//         thu: {
//             open: 12,
//             close: 22,
//         },
//         fri: {
//             open: 11,
//             close: 23,
//         },
//         sat: {
//             open: 0,
//             close: 24,
//         },
//     },

//     // orderDelivery: function (obj) {
//     //     console.log(obj);
//     // },

//     orderDelivery: function ({ time = '10:00', address = 'Lalpur, Ranchi, JH', starterIndex, mainIndex }) {
//         // console.log(`Order received for ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}. Order placed ${time} and will be delivered to ${address}.`);
//     },

//     orderPasta: function (ing1, ing2, ing3) {
//         console.log(`Here\'s your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`);
//     },
// };

// ---------------

// Spread OP from JS Course

// const arr = [7,8,9];
// const newArr = [1,2,...arr];
// console.log(newArr);
// console.log(1,3,7,8,9);

// const newMenu = [...r.mainMenu, 'Khichdi'];
// console.log(newMenu);

// const obj = {...arr};
// console.log(obj);
// console.log(...r.name);
// const str = [...r.name,' ', 'S.'];
// console.log(str);

// console.log('s','o','u','r','i','n');

// const ingredients = [
//     prompt("Let's make Pasta! Ingredient 1?"),
//     prompt('Ingredient 2?'),
//     prompt('Ingredient 3?'),
// ];

// console.log(ingredients);
// r.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// r.orderPasta(...ingredients);

// const newR = {foundedIn: 2002, ...r, founder: 'Sourin Sarkar'};
// console.log(newR);


// const newR = {
//     ...r,
//     catgories: [...r.categories],
// };

// console.log(r);
// console.log(newR);

// newR.categories.push('Japanese');

// ---------------

// r.orderDelivery({
//     time: '22:30',
//     address: 'Sayal, Ramgarh, JH',
//     mainIndex: 2,
//     starterIndex: 3,
// });

// r.orderDelivery({
//     mainIndex: 1,
//     starterIndex: 2,
// })

// ----------------

// const x = [1,2,3,4,5];
// const [a,b,c,d,e] = x;
// console.log(a,b,c,d,e);

// const w = {x: 1, y: 2, z: 3};
// const {x,y,z} = w;
// const f = w.x;
// const g = w.x;
// const h = w.x;
// console.log(x);
// console.log(y);
// console.log(z);

// const person = {
//     name: 'Sanju',
//     age: 21,
//     friend: ['Tanuja','Sabeer','Amar','Rivum'],
// };

// const human = {...person, friend: [...person.friend]};
// human.name = 'Manju';
// console.log(person)
// console.log(human)
// console.log(person.friend)
// console.log(human.friend);
// human.age = 31;
// person.friend.pop();
// console.log(person);
// console.log(human);

// -------------------------Array Destructuring-----------

// const [first,, second] = r.categories;
// console.log(`${first} and ${second}`);

// let [main, secondary] = r.categories;
// console.log(main, secondary);
// [main, secondary] = [secondary, main]; // switching variables
// console.log(main, secondary);

// const [starterCourse, mainCourse] = r.order(2,1);
// console.log(`I'd like to have ${starterCourse} in starters and ${mainCourse} in lunch. Thank you.`);

// const nested = [1,2,3, [4, 5]];
// const [a,,,[d, e]] = nested;
// console.log(a,d,e);

// const [q,w, l = 1] = [10, 20];
// console.log(q,w, l);

// ----------------------Object Destructuring-------------

// const {name, openingHours, categories} = r;
// console.log(name);
// console.log(openingHours);
// console.log(categories);

// const {name: restaurantName, openingHours: hours, categories: tags} = r;
// console.log(restaurantName, hours, tags);

// const { fri: {open: o, close: c} } = openingHours;
// console.log(o,c)

// Practice session
// trying to write in form of sentences

// const [x,y,z] = r.starterMenu;
// const [m,n,o] = r.mainMenu;
// const {name: naam} = r;
// console.log(`${naam} serves you:
// ${x}, ${y}, ${z} in starters.
// ${m}, ${n}, ${o} in main course.`);

// const {openingHours: hours} = r;
// const {fri: {open: f_o, close: f_c}, sat: {open: s_o, close: s_c}} = r.openingHours;
// console.log('FRI:', f_o, f_c);
// console.log('SAT:', s_o, s_c);
// console.log(hours)

// console.log(`${naam} is open on Friday from ${f_o} am to ${f_c} pm everyweek.`);
// console.log(`${naam} is open on Saturday from ${s_o} am to ${s_c} pm everyweek.`);

const r = {
    name: 'Sourin\'s Rasoi',
    location: 'Sourin City, Bangaluru, Karnataka, India',
    categories: ['North Indian', 'South Indian', 'Kannadiga', 'Khatta'],
    starterMenu: ['Idli', 'Aloo Bonda', 'Upma', 'Uttappam', 'Poha', 'Sabudana'],
    mainMenu: ['Thali', 'Biryani', 'Dal Bati Churma'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },

    // orderDelivery: function (obj) {
    //     console.log(obj);
    // },

    orderDelivery: function ({ time = '10:00', address = 'Lalpur, Ranchi, JH', starterIndex, mainIndex }) {
        // console.log(`Order received for ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}. Order placed ${time} and will be delivered to ${address}.`);
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here\'s your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`);
    },
};

// Rest Operator

// Spead: Right side of assignment OP
// const foo = [1,2,...[3,4]];
// console.log(foo);

// Rest: Left side of assignment OP
// const [a,b,...others] = [1,2,3,4,5,6,7,8];

// const [Thali, Biryani, ...otherFood] =  [...r.starterMenu, ...r.mainMenu];
// console.log(Thali, Biryani, otherFood);

// //objects

// const {sat, ...weekDays} = r.openingHours;
// console.log(weekDays);

// functions

// const add = function (...numbers) {
//     console.log(a+b+c);
// }

// add(2,3);
// add(5,3,7,2);
// add(5,3,7,2,1,6,9);

// const x = [10,20,30];
// add(...x);

