// swaping using temp

let num1 = prompt("Enter 1st number: ");
let num2 = prompt("Enter 2nd number: ");

let temp;
console.log(
  `Before swapping, 1st number is ${num1} and 2nd number is ${num2}.`
);
temp = num1;
num1 = num2;
num2 = temp;

console.log(`After swapping, 1st number is ${num1} and 2nd number is ${num2}.`);

// using destructuring assignment
[a, b] = [b, a];
console.log(`After swapping, 1st number is ${a} and 2nd number is ${b}.`);

// a = 10 , b = 5
a = a + b; // a = 15
b = a - b; // b = 15 - 5 = 10
a = a - b; // a = 15 - 10 = 5
