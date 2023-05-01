'use strict';

console.log();

const days = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];


const restaurant = {
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
}

// Maps
const resturantMap = new Map();
console.log(resturantMap);

// Set map values
resturantMap.set('name', 'Classico Italiano');
resturantMap.set(1, 'Firenz, Itally');
console.log(resturantMap.set(2, 'Lisbon, Portugal')); // (Call set method returns the map)
console.log();
