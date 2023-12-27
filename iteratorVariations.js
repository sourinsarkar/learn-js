// Array
const arr = [1,2,3,4,5,6,7,8,9,10];
const namedArray = ["Something", "Somewhere", "Someone", "Somewhat", "Somehow", "Someday", "Someway"];

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Sourin";

// for(const greet of greetings) {
//     if(greet == ' ') continue;
//     else console.log(`Each char is ${greet}`);
// }

// Map
const newmap = new Map();
newmap.set('IN', "India");
newmap.set('USA', "United States of America");
newmap.set('AU', "Australia");

// console.log(newmap);

// for(const [key, value] of newmap) {
//     console.log(key);
//     console.log(`The values are: ${value}`);
// }

// console.log('');

// newmap.forEach((key, value) => {
//     console.log(key);
//     console.log(`The values are: ${value}`);
// });

// for(let key of newmap.keys()) {
//     console.log(`Key: ${key}`);
// }

// for(let value of newmap.values()) {
//     console.log(`Key: ${value}`);
// }

// Object
const browsers = {
    "Google": "Chrome",
    "Apple": "Safari",
    "Microsoft": "Edge",
    "Mozilla": "Firefox",
}

// for(const key in browsers) {
//     console.log(`${key} has build ${browsers[key]}`);
// }

// console.log('');

// for(const [key, value] of Object.entries(browsers)) {
//     console.log(`${key} has build ${value}`);
// }

// for(const key in arr) {
//     console.log(`${arr[key]} is present at ${key}`);
// }

// namedArray.forEach((item) => {
//     console.log(item);
// });

// function printIt(item) {
//     console.log(item);
// }
// console.log('');
// namedArray.forEach(printIt);

// namedArray.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// });

// const newNumbers = arr.filter((num) => num > 4);
// const newNumbers = arr.filter((item) => {
//     return item > 4;
// });
// console.log(...newNumbers);

// const newnums = arr.map((num) => {
//     return num + 10;
// })

// console.log(newnums);

// const newarr = [];
// const newnum = arr.forEach((num) => {
//     newarr.push(num + 10);
// });

// console.log(newarr);

// Chaining
const newnums = arr.map((num) => num * 10).map((num) => num + 1).map((num) => num + 1).filter((num) => num >= 70 && num <= 100);
console.log(newnums);

// Reduce

// const things = [1,2,3];
// const newnums = things.reduce(function (acc, curr) {
//     console.log(`Acc: ${acc} and Curr: ${curr}`);
//     return acc + curr;
// }, 5);

// const newnums = things.reduce((acc, curr) => acc + curr, 0)
// console.log(newnums);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999,
    },
    {
        itemName: "node js",
        price: 3999,
    },
    {
        itemName: "mobile dev course",
        price: 5999,
    },
    {
        itemName: "data science course",
        price: 9999,
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price,0)
console.log(priceToPay);