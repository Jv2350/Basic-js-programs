let number = Math.floor(Math.random() * 10);

// using if else
if (number % 2 == 0) {
  console.log(`${number} is even`);
} else {
  console.log(`${number} is odd`);
}

// using ternary
let output = number % 2 == 0 ? "even" : "odd";
console.log(output);