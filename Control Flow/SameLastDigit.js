const num1 = Math.round(Math.random() * 100);
const num2 = Math.round(Math.random() * 100);
const num3 = Math.round(Math.random() * 100);

const res1 = num1 % 10;
const res2 = num2 % 10;
const res3 = num3 % 10;

if (res1 === res2 && res2 === res3) {
  console.log(`${num1}, ${num2} and ${num3} are having same last digit.`);
} else {
  console.log(`${num1}, ${num2} and ${num3} are not having same last digit.`);
}
