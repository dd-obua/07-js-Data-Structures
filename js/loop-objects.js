// Loop over propety names / keys

const { log } = require('console');
const { loadavg } = require('os');

// Given
const days = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

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

console.log();

// Manipulate property names
const properies = Object.keys(openingHours);
console.log(properies);
console.log();

let openStr = `We are open on ${properies.length} days, `;

for (const day of properies) openStr += `${day}, `;
console.log(openStr);

console.log();

// Manipulate property values
const values = Object.values(openingHours);
console.log(values);

console.log();

// Manipulate both properties and values of an array
const entries = Object.entries(openingHours);
console.log('Entires:', entries);

console.log();

for (const entry of entries) console.log('Entry:', entry);

console.log();

for (const [key, value] of entries)
  console.log(
    `On ${key} we open at ${value.open} and close at ${value.close}.`
  );

console.log();

// Manipulate properties of value using destructuring
for (const [key, { open, close }] of entries)
  console.log(`On ${key}, we open at ${open} and close at ${close}.`);

console.log();
