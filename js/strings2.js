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

// Compare emails
const trueEmail = 'hello@dan.io';
const loginEmail = ' Hello@Dan.io\n';

const normalizedEmail = loginEmail.trim().toLowerCase();
console.log(normalizedEmail);
console.log('Email works? ', loginEmail === normalizedEmail);
console.log();

const isNormalizable = function (email1, email2) {
  const normalizedEmail1 = email1.trim().toLowerCase();
  const normalizedEmail2 = email2.trim().toLowerCase();
  return normalizedEmail1 === normalizedEmail2;
};
console.log(isNormalizable('dan.io', ' DAN.IO '));
console.log(isNormalizable('denis.io', 'DENIS . IO'));
console.log();

// Replace parts of a string
const priceGB = '288,97£';
const priceUS = priceGB.replace(',', '.').replace('£', '$');
console.log(priceUS);
