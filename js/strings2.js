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

const canWork = function (email1, email2) {
  return email1.trim().toLowerCase() === email2.trim().toLowerCase();
};
console.log(canWork('dan.io', ' DAN.IO '));
console.log(canWork('denis.io', 'DENIS . IO'));
console.log();

// Replace parts of a string
const priceGB = '288,97£';
const priceUS = priceGB.replace(',', '.').replace('£', '$');
console.log(priceUS);
console.log();

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log('Annoncement:', announcement);
console.log();

const correctAnnouncement = announcement.replace('door', 'gate');
console.log('Correct annoucement:', correctAnnouncement);
console.log();

const mostCorrectAnnouncement = announcement.replace(/door/g, 'gate');
console.log('Most correct announcement:', mostCorrectAnnouncement);
console.log();
