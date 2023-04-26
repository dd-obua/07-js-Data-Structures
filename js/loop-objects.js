// Loop over propety names / keys

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
