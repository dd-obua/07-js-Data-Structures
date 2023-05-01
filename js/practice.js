'use strict';

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Required output
// Delayed Depature from FAO to TXL (11h25)
//          Arrival from BRU to FAO (11h45)
// Delayed Depature from HEL to FAO (12h05)
//         Depature from HEL to LIS (12h30)

// Seperate the string at + into array elements
const getCode = str => str.slice(0, 3).toUpperCase();

for (const msg of flights.split('+')) {
  const [activity, from, to, time] = msg.split(';');
  const output = `${
    activity.startsWith('_Delayed') ? '🔴' : ''
  }${activity.replace(/_/g, ' ')} ${getCode(from)} ${getCode(
    to
  )} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
