'use strict';

console.log();

const airline = 'TAP Air Portugal';

// Change case
const lowercase = airline.toLowerCase();
console.log('Lowercase:', lowercase);
console.log();

const uppercase = airline.toUpperCase();
console.log('Uppercase:', uppercase);
console.log();

// Fix capilization in the name
const passenger = 'dEnIS';

function toSentenceCase(word) {
  const lowercase = word.toLowerCase();
  const correctCase = lowercase[0].toUpperCase() + lowercase.slice(1);
  return correctCase;
}

console.log(toSentenceCase(passenger));
console.log();
