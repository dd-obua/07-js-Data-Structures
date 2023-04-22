console.log();
//  Rest patterns and rest parameters

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

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Destructuring

// User rest with arrays
// Spread (right side of the equal sign)
const arr = [1, 2, ...[3, 4]]; // Splits the inner array into individual elements

console.log(arr);

console.log();

// Spread (left side of the equal sign)
const [a, b, ...others] = [1, 2]; // assigns array elements to individual variables, the balance is an array
console.log('a:', a);
console.log('b:', b);
console.log('others:', others);

console.log();

const [pizza, , rizotto, ...otherFood] = [
  ...resturant.mainMenu,
  ...resturant.starterMenu,
];

console.log(pizza, rizotto, otherFood); // the rest pattern does not include any skipped elements

console.log();

// Use rest with objects
const { sat, ...weekdays } = resturant.openingHours;
console.log('Weekend:', sat);
console.log('Weekdays:', weekdays);

console.log();

// Using rest with functions
const add = function (...numbers) {
  let sum = 0;
  numbers.forEach(number => (sum += number));
  return sum;
};

console.log(add(1, 2));
console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4));
console.log(add(1, 2, 3, 4, 5));
console.log(add(1, 2, 3, 4, 5, 6));

console.log();

const nums = [10, 20, 30];
console.log(add(...nums));

console.log();

resturant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

resturant.orderPizza('mushrooms');
