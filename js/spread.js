'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Destructuring an argument which is an object
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = '20:00',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ingred1, ingred2, ingred3) {
    console.log(
      `Here is your delicious pasta with ${ingred1} , ${ingred2} and ${ingred3}`
    );
  },
};

console.log();

// Unpacking arrays into individual elements using the spread operator
const arr = [7, 8, 9];
console.log('Original:', arr);

const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log('Bad approach', badNewArr);

const newArr = [1, 2, ...arr];
console.log('Using spread:', newArr);
console.log('Spreaded new array:', ...newArr);

console.log();

//
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log('New menu:', newMenu);

console.log();

// Shallow copy arrays using the spread operator
const mainMenuCopy = [...restaurant.mainMenu];
console.log('Copy of main menu:', mainMenuCopy);

console.log();

// Join multiple arrays using the spread operator
const arr1 = [1, 2, 3];
const arr2 = [11, 22, 33];
const arr3 = [111, 222, 333];

const combinedArr = [...arr1, ...arr2, ...arr3];
console.log('Combined array:', combinedArr);

console.log();

const combinedMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log('Combined menu:', combinedMenu);

console.log();

// Iterables
let str = 'Denis';
const letters = [...str, ' ', 'O'];
console.log('String:', str);
console.log('Letters:', letters);

console.log();

// Pass arguments into a function using spread operator [Real world example]
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
console.log('Ingredients:', ingredients);

restaurant.orderPasta(...ingredients);

console.log();

// Using the spread operator on objects
const newResturant = { ...restaurant, founder: 'Guiseppe', foundedIn: 1998 };
console.log('New resturant:', newResturant);

console.log();

const resturantCopy = { ...restaurant };
resturantCopy.name = 'Ristoranate Roma';
console.log('Original:', restaurant.name);
console.log('Copy:', resturantCopy.name);

console.log();
