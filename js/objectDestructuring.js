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
};

console.log();

//
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

console.log();

restaurant.orderDelivery({
  starterIndex: 1,
  address: 'Plot 4, Oyite Ojok Lane',
});

console.log();

const { name, openingHours, categories } = restaurant;
console.log('Name:', name);
console.log('Opening hours:', openingHours);
console.log('Categories:', categories);

console.log();

// Setting new variable names for object properties
const {
  name: resturantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log('Name:', resturantName);
console.log('Opening hours:', hours);
console.log('Categories:', tags);

console.log();

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log('Menu:', menu);
console.log('Starter menu:', starters);
console.log();

// Mutating variables while destructuring objects
let a = 111,
  b = 999;

const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log('a:', a);
console.log('b:', b);
console.log('c:', obj.c);

console.log();

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;

console.log('Open:', o);
console.log('Close:', c);

console.log();
