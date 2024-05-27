const number = Math.round(Math.random() * 900) + 100;

const numStr = number.toString();
const numDigits = numStr.length;
let sum = 0;

let temp = parseInt(number, 10);

for (let i = 0; i < numDigits; i++) {
  let remainder = temp % 10;

  sum += Math.pow(remainder, 3);

  temp = parseInt(temp / 10);
}

if (sum == number) {
  console.log(`${number} is an Armstrong number`);
} else {
  console.log(`${number} is not an Armstrong number.`);
}
