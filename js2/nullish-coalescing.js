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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log('Main ingredient:', mainIngredient);
    console.log('Other ingredients:', otherIngredients);
  },
};

console.log();

resturant.numGuests = 0;

const guests = resturant.numGuests || 10;
console.log('Number of guests:', guests); // yeilds incorrect result because 0 is a falsy value
console.log();

// Nullish values: null and undefined
const guestCorrect = resturant.numGuests ?? 10;
console.log('Correct number:', guestCorrect); // correct the falsy behavior of 0
console.log();
