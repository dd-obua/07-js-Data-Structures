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

// Assign object properties using rest pattern
const { sat: saturday, ...weekdays } = resturant.openingHours;
console.log('Saturday:', saturday);
console.log('Weekdays:', weekdays);

console.log();

// Add an unspecified number of values
const add = function (...nums) {
  let sum = 0;
  nums.forEach(num => (sum += num));
  return sum;
};

console.log();
console.log(add(1));
console.log(add(1, 2));
console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4));
console.log(add(1, 2, 3, 4, 5));

console.log();

// Given
const vals = [10, 12, 14, 16, 18, 20];
console.log(add(...vals));
console.log();

//
resturant.orderPizza('Floor', 'Sugar', 'Oil');
console.log();
resturant.orderPizza('Mushrooms');

console.log();
