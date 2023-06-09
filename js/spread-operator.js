'use strict';

// Create a new array from an existiing one
let arr = [4, 5, 6];
console.log('Array:', arr);
console.log();

// Method 1
let badNewArr = [1, 2, 3, arr[1], arr[1], arr[2]];
console.log('Bad new array:', badNewArr);
console.log();

// Method 2: Using the spread operator
let newArr = [2, 3, ...arr];
console.log('New array:', newArr);
console.log();

// Pass individual array elements into a function
console.log(...newArr);
console.log();

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

  orderPasta: function (ingredient1, ingredient2, ingredient3) {
    console.log(
      `Here is your delicious pasta with ${ingredient1}, ${ingredient2} and ${ingredient3}.`
    );
  },
};

// Create menu with extra elements
const newMenu = [...resturant.mainMenu, 'Gnocci'];
console.log('New menu:', newMenu);

console.log();

// Create a shallow copy of an array using spread operator
const mainMenuCopy = [...resturant.mainMenu];
console.log('Starter menu:', resturant.starterMenu);
console.log('Main menu:', resturant.mainMenu);
console.log('Copy of main menu:', mainMenuCopy);

console.log();

// Join arrays using spread operator
const menu = [...resturant.starterMenu, ...resturant.mainMenu];
console.log('Combined menu:', menu);

console.log();

// Unpacking iterables using the spread operator
const str = 'Denis';
const letters = [...str];
console.log('String:', str);
console.log('StrArr:', letters);
console.log('Individual letters:', letters);
console.log(...letters);

console.log();

// Use spread operator to pass arguments to a function
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1:"),
  // prompt('Ingredient 2:'),
  // prompt('Ingredient 3:'),
];

console.log('Ingredients:', ingredients);
resturant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
resturant.orderPasta(...ingredients);
console.log();

// Create an object from an existing one using the spread operator
const newResturant = { foundedIn: 1988, ...resturant, founder: 'Guissepe' };
console.log('New Resturant:', newResturant);

console.log();

// Copy an object
const resturantCopy = { ...resturant };
console.log('Resturant:', resturant);

console.log();

console.log('Copy of restrurant:', resturantCopy);

console.log();

resturantCopy.name = 'Ristorante Roma';
console.log('Original:', resturant.name);
console.log('Copy:', resturantCopy.name);

console.log();
