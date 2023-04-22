'use strict';

// Array destructuring - Making each array element a seperate variable

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const a = 2;
const b = 3;
const c = 3;

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

console.log();

console.log(restaurant);

console.log();

const [first, second] = restaurant.categories;
console.log('First:', first);
console.log('Second:', second);

console.log();

// Taking the first and the third
let [main, , secondary] = restaurant.categories;
console.log('Main:', main);
console.log('Secondary:', secondary);

console.log();

// Swapping main and secondary
let temp = main;
main = secondary;
secondary = temp;
console.log('Main:', main);
console.log('Secondary:', secondary);

// Swapping using destructuring
console.log();
[main, secondary] = [secondary, main];
console.log('Main:', main);
console.log('Secondary:', secondary);
console.log();

// Receive 2 returned values from a function
const [starterCourse, mainCourse] = restaurant.order(2, 0);
console.log('Starter:', starterCourse);
console.log('Main:', mainCourse);

console.log();

// Destructuring nested arrays
const nestedArr = [2, 4, [5, 6]];
console.log('Original array:', nestedArr);
console.log();
const [i, , k] = nestedArr;
console.log(i, k);

console.log();

const [p, , [r, s]] = nestedArr;
console.log(p, r, s);

console.log();

// Default values
const [d = 1, e = 1, f = 1] = [8, 9];
console.log(d, e, f);

console.log();
