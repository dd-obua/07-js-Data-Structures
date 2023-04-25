'use strict';

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

const resturant1 = {
  name: 'Capri',
  numGuests: 0,
};

const resturant2 = {
  name: 'Lapiazza',
  owner: 'Giovanni Rossi',
};

// Set default number of guests
resturant1.numGuests = resturant1.numGuests || 10;
resturant2.numGuests = resturant2.numGuests || 10;

console.log('Resturant 1:', resturant1);
console.log('Resturant 2:', resturant2);

console.log();
