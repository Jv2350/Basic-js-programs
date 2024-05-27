// square root of the number

const number = prompt("Enter a number: ");

const squareRoot = Math.sqrt(number);
console.log(`Square root of ${number} is ${squareRoot}`);

// sqrt of diff datatypes
const num1 = 1.2;
const num2 = -1; // NaN
const num3 = "abc"; // NaN

console.log(Math.sqrt(num1));
console.log(Math.sqrt(num2));
console.log(Math.sqrt(num3));
