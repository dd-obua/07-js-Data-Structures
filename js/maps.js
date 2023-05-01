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

// Compute property names
const openingHours = {
  [days[3]]: {
    open: 12,
    close: 22,
  },
  [days[4]]: {
    open: 11,
    close: 23,
  },
  [days[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Maps
const resturant = new Map();
console.log(resturant);

// Set map values
resturant.set('name', 'Classico Italiano');
resturant.set(1, 'Firenz, Itally');
console.log(resturant.set(2, 'Lisbon, Portugal')); // (Call set method returns the map)
console.log();
