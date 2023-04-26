const { log } = require('console');

// Given
const resturant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

console.log();

const menu = [...resturant.starterMenu, ...resturant.mainMenu];

for (const item of menu) console.log(item);

console.log();

// Capture item indices
for (const item of menu.entries()) console.log(`${item[0] + 1}: ${item[1]}`);

console.log();
