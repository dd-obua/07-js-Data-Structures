'use strict';

const { maxHeaderSize } = require('http');

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

// Booleans (includes(), startsWith(), endsWith())
const plane = 'Airbus A320neo';
const includesStr1 = plane.includes('A320');
const includesStr2 = plane.includes('Boeing');
console.log('Includes A32O:', includesStr1);
console.log('Includes Boeing:', includesStr2);
console.log();

const startStr = plane.startsWith('Air');
console.log(`${plane} starts with Air:`, startStr);
console.log();

if (plane.startsWith('Airbus') && plane.endsWith('neo'))
  console.log('Part of the NEW Airbus family.');
console.log();

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('gun') || baggage.includes('knife'))
    console.log('You are NOT allowed on board.');
  else console.log('Welcome aboard!');
};

const stmt1 = 'I have a laptop, some Food and a pocket knife.';
const stmt2 = 'Socks and camera.';
const stmt3 = 'Got some snaks and a gun for protection.';

checkBaggage(stmt1);
checkBaggage(stmt2);
checkBaggage(stmt3);
console.log();

// Split strings
const str1 = 'a+very+nice+string';
const str2 = str1.split('+');
console.log('Original string:', str1);
console.log('Result of spliting:', str2);
console.log();

const fullName = 'Obua Denis Daniel';
const eachName = fullName.split(' ');
console.log('Full name:', fullName);
console.log('Each name:', eachName);
console.log();
