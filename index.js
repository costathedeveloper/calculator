const http = require('http');
const readline = require('readline-sync');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Welcome to the calculator app!\n\n');

  const num1 = readline.questionInt('Enter the first number: ');
  const num2 = readline.questionInt('Enter the second number: ');

  res.write(`The sum of ${num1} and ${num2} is ${num1 + num2}.\n`);
  res.write(`The difference between ${num1} and ${num2} is ${num1 - num2}.\n`);
  res.write(`The product of ${num1} and ${num2} is ${num1 * num2}.\n`);
  res.write(`The quotient of ${num1} and ${num2} is ${num1 / num2}.\n`);
  res.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
