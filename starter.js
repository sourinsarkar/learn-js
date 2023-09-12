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

// const r = {
//     name: 'Sourin\'s Rasoi',
//     location: 'Sourin City, Bangaluru, Karnataka, India',
//     categories: ['North Indian', 'South Indian', 'Kannadiga', 'Khatta'],
//     starterMenu: ['Idli', 'Aloo Bonda', 'Upma', 'Uttappam', 'Poha', 'Sabudana'],
//     mainMenu: ['Thali', 'Biryani', 'Dal Bati Churma'],
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

//     orderDelivery: function (obj) {
//         console.log(obj);
//     },

//     orderDelivery ({ time = '10:00', address = 'Lalpur, Ranchi, JH', starterIndex, mainIndex }) {
//         console.log(`Order received for ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}. Order placed ${time} and will be delivered to ${address}.`);
//     },

//     orderPasta: function (ing1, ing2, ing3) {
//         console.log(`Here\'s your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`);
//     },
// };

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

//-----------------------------------------------------------------------------------------------------------------------------------------------

// const menu = [...r.starterMenu, ...r.mainMenu];
// console.log(menu);

// for(const item of menu) console.log(item);

// for(const item of menu.entries()) {
//     console.log(item);
// }

// for(const item of menu.entries()) {
//     console.log(`${item[0] + 1}: ${item[1]}`);
// }

// Time for some rivision:

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

// ----------------------------------------------------------------------------------------------------------------------------

// Enhanced Object Literals

// const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',' Sun'];

// const openingHours = {
//     [weekdays[4]]: {
//         open: 12,
//         close: 22,
//     },
//     [weekdays[5]]: {
//         open: 11,
//         close: 23,
//     },
//     [`day-${2+3}`]: {
//         open: 0,
//         close: 24,
//     },
// };

// const r = {
//     name: 'Sourin\'s Rasoi',
//     location: 'Sourin City, Bangaluru, Karnataka, India',
//     categories: ['North Indian', 'South Indian', 'Kannadiga', 'Khatta'],
//     starterMenu: ['Idli', 'Aloo Bonda', 'Upma', 'Uttappam', 'Poha', 'Sabudana'],
//     mainMenu: ['Thali', 'Biryani', 'Dal Bati Churma'],
//     order: function (starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },

//     openingHours,

//     orderDelivery: function (obj) {
//         console.log(obj);
//     },

//     orderDelivery ({ time = '10:00', address = 'Lalpur, Ranchi, JH', starterIndex, mainIndex }) {
//         console.log(`Order received for ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}. Order placed ${time} and will be delivered to ${address}.`);
//     },

//     orderPasta: function (ing1, ing2, ing3) {
//         console.log(`Here\'s your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`);
//     },
// };

// ----------------------------------------------------------------------------------------------------------------------------

// Strings

// const airline = "Fly Sourin: Air Voyager";
// const plane = "A320";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);

// console.log("Sourin"[4]);

// console.log(airline.length);
// console.log("sarkar".length);

// console.log(airline.indexOf('l'));
// console.log(airline.indexOf('f'));
// console.log(airline.lastIndexOf('S'));

// -----------------------------------------------------

// Slice

// console.log(airline.slice(4));
// console.log(airline.slice(4, 10));
// console.log(airline.slice(-7,-3));
// console.log(airline.slice(16,-3));

// const checkMiddleSeat = function(seat) {
//     const s = seat.slice(-1);
//     if(s === 'B' | s === 'E') console.log('You got the middle seat.');
//     else console.log('You got lucky O_O');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// const email = "work@sourin.in";
// const loginEmail = "    wORK@SOUrin.in";

// const normalEmail = loginEmail.toLowerCase().trim();

// if(normalEmail === email) {
//     console.log("Same");
// } else {
//     console.log("Different");
// }

// const announcement = "All passengers come to boarding door 26. Boarding door 26.";
// console.log(announcement.replace("door", "gate"));
// console.log(announcement.replaceAll("door", "gate"));
// console.log(announcement.replace(/door/g, "gate"));

// console.log(airline.includes("Sandhik"));
// console.log(airline.includes("Sourin"));
// console.log(airline.startsWith("Fly"));
// console.log(airline.startsWith("Sourin"));
// console.log(plane.startsWith("S"));
// console.log(plane.startsWith("A"));

// ------------------------------------------

// Split & Join

// console.log("sourin+sarkar".split('+'));
// console.log("sourin sarkar".split(' '));

// const [firstName, lastName] = "sourin sarkar".split(' ');
// console.log(firstName, lastName);

// const newName = ["Mr.", firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// console.log(["Mr.", firstName, lastName.toUpperCase()]);
// console.log(["Mr.", firstName, lastName.toUpperCase()].join(' '));
// console.log(...["Mr.", firstName, lastName.toUpperCase()]);

// const capitalizaName = function(name) {
//     console.log(name.toUpperCase());
// }

// capitalizaName("sourin");
// capitalizaName("sandhik");
// capitalizaName("sanJEEvani");

// ------------------------------------------

// const capitalizeFirstLetter = function(name) {
//     const names = name.split(' ');
//     const newArray = []; 

//     for(const n of names) {

//         // Way 1
//         newArray.push(n[0].toUpperCase() + n.slice(1));

//         // Way 2
//         newArray.push(n.replace(n[0], n[0].toUpperCase()));
//     }
//     console.log(newArray.join(' '));
// }

// capitalizeFirstLetter("indian space research organisation");

// ------------------------------------------

// Padding a String

// const message = "Sourin";
// console.log(message.padStart(7, '+'));
// console.log("Hello".padStart(7, '+'));

// const maskCreditCard = function(number) {
//     const str = number + '';
//     const last = str.slice(-4);
//     console.log(last.padStart(str.length, '*'));
// }

// maskCreditCard(18934672534768);
// maskCreditCard('788675632576193280');

// ------------------------------------------

// Repeat

// const message = 'soomeone ';
// console.log(message.repeat(5));

// const totalStudents = function(number) {
//     console.log(`There are ${number} (${'👦'.repeat(number)}) students in this class.`);
// }

// totalStudents(1);
// totalStudents(5);
// totalStudents(10);
// totalStudents(15);
// totalStudents(50);

// ------------------------------------------------------------------------------------------------------------

// Capitalization: PRACTICE

// const capFL = function(word) {
//     const [fname, lname] = word.toLowerCase().trim().split('_');
//     const output = `${fname}${lname.replace(lname[0], lname[0].toUpperCase())}`;
//     console.log(output);
// }

// capFL('sourin_sarkar');

// ------------------------------------------------------------------------------------------------------------

// Practice

// splice(start, deleteCount, item1, ...., itemN);

// const months = ['JAN', 'FEB', 'MAR', 'MAY', 'APR','JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
// months.splice(4,2, 'Sourin', 'Sarkar');
// months.splice(3, 4, "SUP");
// console.log(months);

// console.log(months.slice(0, 7));

// const str = 'I am a student studying in Lovely Professional University.';
// const sentence = str.split(' ');
// console.log(sentence.slice(-3).join(''));
// console.log(sentence.slice(-3).join(' '));
// const studentName = ['Sourin', 'Akansha'];

// for(let i = 0; i <= 1; i++) {
//     console.log(`${studentName[i]} goes to ${(sentence.slice(6).join(' '))}`);
//     console.log(`${studentName[i]} goes to ${(sentence.slice(6).join(' '))}`);
// }

// --------------------------------------------------------------------------------------------------------------------------------------------

// Short Circuiting

// ||=, ??=, &&=

// const rest1 = {
//     name: 'Sourin',
//     numGuests: 10,
// }

// const rest2 = {
//     name: 'Sanju',
//     owner: 'Tanmay',
// }

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// --------------------------------------------------------------------------------------------------------------------------------------------

// Practice Game

// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//         [
//             'Neuer',
//             'Pavard',
//             'Martinez',
//             'Alaba',
//             'Davies',
//             'Kimmich',
//             'Goretzka',
//             'Coman',
//             'Muller',
//             'Gnarby',
//             'Lewandowski',
//         ],
//         [
//             'Burki',
//             'Schulz',
//             'Hummels',
//             'Akanji',
//             'Hakimi',
//             'Weigl',
//             'Witsel',
//             'Hazard',
//             'Brandt',
//             'Sancho',
//             'Gotze',
//         ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//         'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };

// Sol-1

// const [players1, players2] = game.players;

// Sol-2

// const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

// Sol-3

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// Sol-4

// const newPlayers1 = [...players1, 'Swapnil', 'Sourin', 'Suman'];
// console.log(newPlayers1);

// Sol-5

// const {odds: {team1, x: draw, team2}} = game;
// console.log(`Team 1: ${team1}
// Draw: ${draw}
// Team 2: ${team2}`);

// Sol-6

// const printGoals = function(...players) {
//     console.log(`${players.length} goals were scored.`);
// }

// printGoals('Sourin', 'Swapnil', 'Suman', 'Sandhik');
// printGoals(...game.scored);

// Sol-7

// const winTeam = team1 < team2 ? "Team 1" : "Team 2"; // Way-1
// team1 < team2 && console.log("Team1 is more likely to win.");
// console.log(winTeam);

// ---------------------------------------------- Opearations------------------------------------------

// const newArray = [...toAdd, array];

// const toAdd = [1,2,3];
// const array = [4,5,6];
// const newArray = [1,2,3, ...array];
// const newArray2 = [...toAdd, '4', '5', '6'];
// console.log(...newArray2);
// console.log(...r.mainMenu, 'Aam', 'Amrud');

// const ingredients = [
//     prompt("First ingredient?"),
//     prompt("Second ingredient?"),
//     prompt("Third ingredient?"),
// ]

// // r.orderPasta("Jalapeno", "Oregano", "Tomato");
// r.orderPasta(ingredients[0] ,ingredients[1] ,ingredients[2]);
// r.orderPasta(...ingredients);

// --------------------------------------------------------------------------------------------------------------------------------------------

// Optional Chaining

// Using the same onject: Restaurant

// const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// const openingHours = {
//     [weekdays[4]]: {
//         open: 12,
//         close: 22,
//     },
//     [weekdays[5]]: {
//         open: 11,
//         close: 23,
//     },
//     [weekdays[6]]: {
//         open: 0,
//         close: 24,
//     },
// }

// const r = {
//     name: 'Sourin\'s Rasoi',
//     location: 'Sourin City, Bangaluru, Karnataka, India',
//     categories: ['North Indian', 'South Indian', 'Kannadiga', 'Khatta'],
//     starterMenu: ['Idli', 'Aloo Bonda', 'Upma', 'Uttappam', 'Poha', 'Sabudana'],
//     mainMenu: ['Thali', 'Biryani', 'Dal Bati Churma'],
//     order: function (starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },

//     openingHours,

//     orderDelivery: function (obj) {
//         console.log(obj);
//     },

//     orderDelivery({ time = '10:00', address = 'Lalpur, Ranchi, JH', starterIndex, mainIndex }) {
//         console.log(`Order received for ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}. Order placed ${time} and will be delivered to ${address}.`);
//     },

//     orderPasta: function (ing1, ing2, ing3) {
//         console.log(`Here\'s your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`);
//     },
// };

// if(r.openingHours.Fri) console.log(r.openingHours.Fri.open);
// console.log(r.openingHours.Tue ?. open);

// for(const day of weekdays) {
//     console.log(day);
//     const open = r.openingHours[day] ?. open ?? 'closed';
//     console.log(`We are open on ${day} at ${open}`);
// }

// ?. On Methods
// const food = r.order ?. (0,1) ?? "Menu doesn't exist!";
// console.log(food);

// ?. On Arrays
// const users = [{
//     name: 'Sourin',
//     email: 'helloworld@sourin.in'
// }];

// console.log(users[0] ?. name ?? 'User array empty!');
// console.log(r.name ?. name ?? 'No Di Dhabba');

// --------------------------------------------------------------------------------------------------------------------------------------------

// Looping over Objects

// PROPERTIES NAMES Only
// const properties = Object.keys(openingHours);
// console.log(properties, properties.length);

// let contentLine = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//     // console.log(day);
//     contentLine +=  `${day}, `;
// }

// console.log(contentLine.replace("Sun,", "Sun."));

// -------------------------------------------------------

// PROPERTY Values

// const values = Object.values(openingHours);
// console.log(values);

// for(const {open, close} of values) {
    //     console.log(`Our store ${open}, ${close}`);
    // }

// const entries = Object.entries(openingHours);
// console.log(entries);   

// for(const [keys, {open, close}] of entries) {
//     console.log(`All of our stores open every ${keys} at ${open}AM and close ${close}PM.`);
// }

// -------------------------------------------------------

// Practice Questions

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// Sol-1

// Way-1

// const playersScored = [...game.scored];
// let count = 1;
// for(const pS of playersScored) {
//     console.log(`Goal ${count}: ${pS}`);
//     count++;
// }

// Way-2

// for(const [i, players] of game.scored.entries()) {
//     console.log(`Goal ${i + 1}: ${players}`);
// }

// Sol-2

// const oddItems = Object.values(game.odds);
// let sum = 0;
// for(const items of oddItems) {
//     sum += items;
// }

// console.log(sum/oddItems.length);

// Sol-3

// for(const [team, odd] of Object.entries(game.odds)) {
//     const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//     console.log(`Odd of ${teamStr}: ${odd}`);
// }

