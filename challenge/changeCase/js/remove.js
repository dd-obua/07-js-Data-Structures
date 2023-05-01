// Remove leading and trailing underscores
let str = '__xyz___';
console.log(str);

// Remove leading underscores
while (str[0] === '_') str = str.replace(str[0], '');

// Remove trailing underscores
while (str[str.length - 1] === '_') str = str.replace(str[str.length - 1], '');

console.log(str);
