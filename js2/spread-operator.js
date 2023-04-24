// Create a new array from an existiing one
let arr = [4, 5, 6];
console.log('Array:', arr);
console.log();

// Method 1
let badNewArr = [1, 2, 3, arr[1], arr[1], arr[2]];
console.log('Bad new array:', badNewArr);
console.log();

// Method 2: Using the spread operator
let newArr = [2, 3, ...arr];
console.log('New array:', newArr);
console.log();

// Pass individual array elements into a function
console.log(...newArr);
console.log();
