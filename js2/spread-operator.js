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

// Create menu with extra elements
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log('New menu:', newMenu);

console.log();

// Create a shallow copy of an array
const mainMenuCopy = [...restaurant.mainMenu];
console.log('Copy of main menu:', mainMenuCopy);
z