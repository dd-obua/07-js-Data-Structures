'use strict';
console.log();

// Part 1
const resturantMap = new Map();

resturantMap.set('name', 'Classico Italiano');
resturantMap.set(1, 'Firenze, Italy');
resturantMap.set(2, 'Lisbon, Porugal');

resturantMap
  .set('categories', ['Italian', 'Pizzera', 'Organic', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open.')
  .set(false, 'We are closed.');

console.log(resturantMap.get('name'));
console.log(resturantMap.get(1));
console.log(resturantMap.get(true));
console.log();

const now = new Date().getHours();
const openingTime = resturantMap.get('open');
const closingTime = resturantMap.get('close');

console.log('Current time:', now);
console.log('Opening time:', openingTime);
console.log('Closing time:', closingTime);
console.log();

const condition = now > openingTime && now < closingTime;
console.log(condition);
console.log(resturantMap.get(condition));
console.log();

// Map methods
const hasCategories = resturantMap.has('categories');
console.log('Has categories?', hasCategories);
console.log();

const lisbonDeleted = resturantMap.delete(2);
console.log('Lisbon deleted?', lisbonDeleted);
console.log('Resturant:', resturantMap);
console.log();

const resturantSize = resturantMap.size;
console.log('Resturant properties:', resturantSize);
console.log();

// Clear properties
// resturantMap.clear();

// Use object as a map key
const arr = [1, 2];
resturantMap.set(arr, 'Test');
// resturantMap.set(document.querySelector('h1'), 'Heading');
console.log('New resturant:', resturantMap);
console.log();
console.log(`${resturantMap.size} properties`);
console.log();

// Part 2

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

console.log(Object.entries(openingHours));
console.log();

// Convert objects to maps
const hoursMap = new Map(Object.entries(openingHours));
console.log('Hours map:', hoursMap);
console.log();

const question = new Map([
  ['qn', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again'],
]);
console.log(question);
console.log();

// Itearate over a map
console.log(question.get('qn'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer: '));
const answer = 3;
console.log(answer);
console.log(question.get(answer === question.get('correct')));
console.log();

// Convert map to array
const questionArray = [...question];
const questionEntries = question.entries();
const questionKeys = question.keys();
const questionValues = question.values();
console.log('Question array:', questionArray);
console.log('Question entries:', questionEntries);
console.log('Question entries array:', [...questionEntries]);
console.log('Question keys', questionKeys);
console.log('Question keys array', [...questionKeys]);
console.log('Question values:', questionValues);
console.log('Question values array:', [...questionValues]);
console.log();
