function sum(num) {
  if (num > 0) {
    return num + sum(num - 1);
  } else {
    return num;
  }
}

const number = Math.round(Math.random() * 10);
console.log(`Sum of ${number} natural number is ${sum(number)}`);
