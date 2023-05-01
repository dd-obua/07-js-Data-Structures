'use strict';
console.log();

const str = 'obua denis daniel';
console.log('String:', str);
const strSet = new Set(str);
console.log('String set:', strSet);
const numUniqueLetters = strSet.size;
console.log(`${numUniqueLetters} unique letters.`);
strSet.clear();
console.log('New string set(on clear()):', strSet);
console.log();

const ordersSet = new Set(['Pasta', 'Pizza', 'Rosotto', 'Pasta', 'Pizza']);

console.log('Orders set:', ordersSet);

let size = ordersSet.size;
console.log('Set size:', size);
console.log('Has Bread?', ordersSet.has('Bread'));
console.log('Has Pizza?', ordersSet.has('Pizza'));
ordersSet.add('Garlic bread');
console.log('Current ordersSet:', ordersSet);
ordersSet.delete('Risitto');
console.log('New ordersSet:', ordersSet);
console.log();

// Loop over sets
for (const order of ordersSet) console.log(order);
console.log();

// Use set to remove duplicate values of an array
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
console.log('All staff:', staff);
const staffUnique = [...new Set(staff)];
console.log('Unique staff:', staffUnique);
const numStaff = new Set(staff).size;
console.log('Number of members:', numStaff);
console.log();
