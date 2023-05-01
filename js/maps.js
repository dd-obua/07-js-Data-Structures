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
};

// Maps
const resturantMap = new Map();
console.log(resturantMap);

// Set map values
resturantMap.set('name', 'Classico Italiano');
resturantMap.set(1, 'Firenz, Itally');
console.log(resturantMap.set(2, 'Lisbon, Portugal')); // (Call set method returns the map)
console.log();

// Chain set methods
resturantMap
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');
console.log('Current map:', resturantMap);
console.log();

// Get data from a map
resturantMap.get('name');
console.log(resturantMap.get('name'));
console.log(resturantMap.get(true));
console.log();

const currentTime = new Date().getHours();
console.log(currentTime);
console.log(
  resturantMap.get(
    currentTime > resturantMap.get('open') ||
      currentTime < resturantMap.get('close')
  )
);
console.log();
