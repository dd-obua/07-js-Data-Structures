// Given

const days = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
  'sunday',
];

// Compute property names
const openingHours = {
  [days[3]]: {
    open: 12,
    close: 22,
  },
  [days[4]]: {
    open: 11,
    close: 23,
  },
  [days[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const resturant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    return `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`;
  },
};

console.log();

console.log('Resturant:', resturant);
console.log();

console.log(
  'Order feedback:',
  resturant.orderDelivery({ address: 'Plot 89, Lower Churchil Drive' })
);
console.log();
