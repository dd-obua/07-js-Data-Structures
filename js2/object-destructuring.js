'use strict';

// Destructure and object
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

  orderDelivery: function ({
    starterIndex = 0,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
};

// Destructure resturant
console.log();

const { name, openingHours, categories } = restaurant;
console.log('Name:', name);
console.log('Opening hours:', openingHours);
console.log('Categories:', categories);

console.log();

const {
  name: resturantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log('Name:', name);
console.log('Opening hours:', openingHours);
console.log('Categories:', tags);

console.log();

// Set default values using destructuring
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log('Menu:', menu);
console.log('Strater menu:', starters);

console.log();

// Mutate variables
let a = 10,
  b = 20;
console.log('a:', a);
console.log('b:', b);

console.log();

const obj = { a: 15, b: 25, c: 35 };
({ a, b } = obj);

console.log('a:', a);
console.log('b:', b);

console.log();

// Destructure nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log('Friday');
console.log('Opening time:', o);
console.log('Closing time:', c);
console.log();

// Destructure an object argument
restaurant.orderDelivery({
  time: '22:30',
  address: 'Plot 32, Obote Avenue',
  mainIndex: 2,
  starterIndex: 2,
});

console.log();

restaurant.orderDelivery({
  address: 'Plot 1, Oyite Ojok Lane',
  starterIndex: 1,
});

console.log();
