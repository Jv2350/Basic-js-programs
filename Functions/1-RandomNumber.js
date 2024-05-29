// 0 to 1
let random = Math.random();
console.log(random);

// 0 to 10
random = Math.random() * 10;
console.log(random);

// int 0 to 10
random = Math.floor(Math.random() * 10) + 1;
console.log(random);

// int value between two numbers
let num1 = 20;
let num2 = 99;
random = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
console.log(`random value between ${num1} and ${num2} is ${random}`);