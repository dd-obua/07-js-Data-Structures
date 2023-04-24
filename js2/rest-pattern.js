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
};

console.log();

// Assign values using rest pattern
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log('a:', a);
console.log('b:', b);
console.log('Others:', others);

console.log();

const [focaccia, , garlicBread, ...otherFood] = [
  ...resturant.starterMenu,
  ...resturant.mainMenu,
];
console.log('Focaccia:', focaccia);
console.log('Garlic bread:', garlicBread);
console.log('Others:', otherFood);

console.log();
