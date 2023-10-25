const weekdays = ['mon', 'tue', 'wed', 'thu', 'sat', 'sun']

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

