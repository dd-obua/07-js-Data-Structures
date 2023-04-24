// Unpacking array vaulues into seperate variables

// Unpack arr
const arr = [1, 2, 3];

// Method 1
const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log('a:', a);
console.log('b:', b);
console.log('c:', c);

console.log();

// Method 2
const [d, e, f] = arr;
console.log('d:', d);
console.log('e:', f);
console.log('f:', f);

console.log();

// Given
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
};

const [firstCat, secondCat] = restaurant.categories;
console.log('Category 1: ', firstCat);
console.log('Category 2: ', secondCat);

console.log();

let [main, , secondary] = restaurant.categories;
console.log('Main category:', main);
console.log('Secondary category:', secondary);

console.log();

// Swap main and secondary categories
// Method 1
const temp = main;
main = secondary;
secondary = temp;
console.log('Main:', main);
console.log('Secondary:', secondary);

console.log();

// Method 2
[main, secondary] = [secondary, main];
console.log('Main:', main);
console.log('Secondary:', secondary);

console.log();

// Desttructure function return values on invokation
const [starterCourse, mainCourse] = restaurant.order(2, 0);
console.log('Starter course:', starterCourse);
console.log('Main course:', mainCourse);

console.log();

// Destructure nested arrays
const nestedArr = [1, 2, [3, 4, 5]];

const [g, h, i] = nestedArr;
console.log('g:', g);
console.log('h:', h);
console.log('i:', i);

console.log();

const [p, , [r, s, t]] = nestedArr;
console.log('p:', p);
console.log('r:', r);
console.log('s:', s);
console.log('t:', t);

console.log();

// Set default values using destructuring
const [j = 1, k = 1, l = 1] = [5, 6];
console.log('j:', j);
console.log('k:', k);
console.log('l:', l);

console.log();
