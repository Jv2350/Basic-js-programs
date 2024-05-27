const num = Math.round(Math.random() * 10);

let factorial = 1;

for (let i = 1; i <= num; i++) {
  factorial *= i;
}
console.log(`Factorial of ${num} is ${factorial}`);

// using recursion
function fac(num) {
  if (num == 1) {
    return 1;
  } else {
    return num * fac(num - 1);
  }
}
console.log(`Factorial of ${num} is${fac(num)}`);
