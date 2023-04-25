// Short-circuit using the logical or operator
console.log();
console.log(3 || 'Dan');
console.log('' || 'Dan');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || null);
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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log('Main ingredient:', mainIngredient);
    console.log('Other ingredients:', otherIngredients);
  },
};

resturant.numGuests = 23;

const guests1 = resturant.numGuests ? resturant.numGuests : 10;
console.log('Guests 1:', guests1);

console.log();

// Same as
const guests2 = resturant.numGuests || 15;
console.log('Guests 2:', guests2);

console.log();

// Short-circuit using logical and operator
console.log(0 && 'Dan');
console.log('Yes' && 'Dan');
console.log('Hello' && 23 && null && 'Dan');

console.log();

if (resturant.orderPizza) {
  resturant.orderPizza('mushrooms', 'spinach');
}

console.log();

// Same as
resturant.orderPizza && resturant.orderPizza('ovacado', 'guava', 'bananas');
