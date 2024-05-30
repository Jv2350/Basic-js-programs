function recursionFact(number) {
  if (number == 0) {
    return 1;
  } else {
    return number * recursionFact(number - 1);
  }
}

const num = Math.floor(Math.random() * 10);
console.log(`Factorial of ${num} is ${recursionFact(num)}`);
