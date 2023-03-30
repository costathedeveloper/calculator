const readline = require('readline-sync');

console.log('Welcome to the calculator app!');

const num1 = readline.questionInt('Enter the first number: ');
const num2 = readline.questionInt('Enter the second number: ');

console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}.`);
console.log(`The difference between ${num1} and ${num2} is ${num1 - num2}.`);
console.log(`The product of ${num1} and ${num2} is ${num1 * num2}.`);
console.log(`The quotient of ${num1} and ${num2} is ${num1 / num2}.`);
