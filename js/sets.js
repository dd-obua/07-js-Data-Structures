'use strict';

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
