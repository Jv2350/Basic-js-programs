function Fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return Fibonacci(num - 1) + Fibonacci(num - 2);
  }
}

const nterms = Math.round(Math.random() * 10);
console.log(`Fibonacci series of ${nterms} terms:`);
for (let i = 0; i < nterms; i++) {
  console.log(Fibonacci(i));
}
