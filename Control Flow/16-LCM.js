// The Least Common Multiple (LCM) of two integers is the smallest positive integer that is perfectly divisible by both integers. For example, the LCM of 6 and 8 is 24.

const num1 = Math.round(Math.random() * 100);
const num2 = Math.round(Math.random() * 100);

let min = num1 > num2 ? num1 : num2;

while (true) {
  if (min % num1 == 0 && min % num2 == 0) {
    console.log(`The LCM of ${num1} and ${num2} is ${min}`);
    break;
  }
  min++;
}
