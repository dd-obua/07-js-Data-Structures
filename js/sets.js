'use strict';

const { kStringMaxLength } = require('buffer');

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log();

console.log(new Set());
console.log();

console.log('Set:', new Set('Denis'));
console.log('Set size:', new Set('Denis').size);
console.log();

console.log('Set 2:', ordersSet);
console.log('Set size:', ordersSet.size);
console.log();

console.log('Has pizza?', ordersSet.has('Pizza'));
console.log('Has bread?', ordersSet.has('Bread'));
console.log();

ordersSet.add('Bread');
console.log('Current set:', ordersSet);
console.log('Current size:', ordersSet.size);
console.log();

ordersSet.delete('Risotto');
console.log('New set:', ordersSet);
console.log('New size:', ordersSet.size);
console.log();

const testSet = new Set(['Obua', 'Denis', 'Daniel']);
console.log('Test set:', testSet);
testSet.clear();
console.log('Test set:', testSet);
console.log();

// Loop through a set
for (const order of ordersSet) console.log(order);

console.log();

// Given
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const uniquePositions = new Set(staff);
console.log('Unique positions:', uniquePositions);
console.log();

const postionsArray = [...uniquePositions];
console.log('Unique positions array:', postionsArray);
console.log();

const numPositions = uniquePositions.size;
console.log('Positions:', numPositions);
console.log();

// Number of uniqe letters in a string
const uniqueLetters = new Set('Obua Denis Daniel').size;
console.log('Unique letters:', uniqueLetters);
console.log();
