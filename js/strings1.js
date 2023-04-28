'use strict';

console.log();

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log('Airline:', airline);
console.log('Plane:', plane);
console.log();

// Get character at a given position
console.log('Position 0:', plane[0]);
console.log('Position 1:', plane[1]);
console.log('Position 2:', plane[2]);
console.log('B737 at position 3:', 'B737'[3]);
console.log();

// Read length properties
console.log(`${airline}: ${airline.length} characters.`);
console.log(`A320: ${'A320'.length} characters.`);
console.log();

// String methods
// Get index of characters
console.log('Index of r:', airline.indexOf('r'));
console.log('Last index of r:', airline.lastIndexOf('r'));
console.log('Index of Portugal:', airline.indexOf('Portugal'));
console.log('Index of portugal (does not exist):', airline.indexOf('portugal'));
console.log();

// Extract parts of a string
console.log('A slice from index 4:', airline.slice(4));
console.log('A slice from index 4 to before 7:', airline.slice(4, 7));
console.log();

// Extract the first word from airplane
console.log('First word:', airline.slice(0, airline.indexOf(' ')));

// Extract the last word form airplane
console.log('Last word:', airline.slice(airline.lastIndexOf(' ') + 1));
console.log();

// Extract from the end
console.log('Last letters:', airline.slice(-3));
console.log('Begin after 0, end before end:', airline.slice(1, -1));
console.log();
