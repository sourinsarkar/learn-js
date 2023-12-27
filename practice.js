const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },

    [weekdays[4]]: {
        open: 11,
        close: 23,
    },

    [weekdays[5]]: {
        open: 0,
        close: 24,
    }
}

const r = {
    name: 'Sourin\'s Rasoi',
    location: 'Sourin City, Bangaluru, Karnataka, India',
    categories: ['North Indian', 'South Indian', 'Kannadiga', 'Khatta'],
    starterMenu: ['Idli', 'Aloo Bonda', 'Upma', 'Uttappam', 'Poha', 'Sabudana'],
    mainMenu: ['Thali', 'Biryani', 'Dal Bati Churma'],
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    openingHours,

    orderDelivery: function (obj) {
        console.log(obj);
    },

    orderDelivery({ time = '10:00', address = 'Lalpur, Ranchi, JH', starterIndex, mainIndex }) {
        console.log(`Order received for ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}. Order placed ${time} and will be delivered to ${address}.`);
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here\'s your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`);
    },
};

// --------------------------------------------------

// const menu = [...r.starterMenu, ...r.mainMenu];
// for (const items of menu) console.log(items);

// for(const [m,n] of menu.entries()) {
//     console.log(`${m + 1}: ${n}`);
// }

// Optional Chaining

// console.log(r.openingHours.mon?.open);

// for (const day of weekdays) {
//     const open = r.openingHours[day]?.open ?? 'closed';
//     console.log(`On ${day}day, we open at ${open}`);
// }

// console.log(r.order?.(0,1) ?? 'Method does not exist.');
// console.log(weekdays?.[5] ?? 'Method does not exist') ;

// const user = [
//     {
//         name: 'Sourin',
//         email: 'sourin@example.com',
//     }
// ];

// console.log(user[0]?.name ?? "User's name is annonymous.");

const propK = Object.keys(openingHours);
const propV = Object.values(openingHours);
console.log(propK.length);
console.log(propV.length);

for(const day of Object.values(openingHours)) {
    console.log(day);
}