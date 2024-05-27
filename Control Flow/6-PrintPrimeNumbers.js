const min = Math.round(Math.random() * 10);
const max = Math.round(Math.random() * 100);
console.log(`Prime number between ${min} and ${max} are`);

for (let i = min; i <= max; i++) {
  let flag = 0;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }
  if (i > 1 && flag == 0) {
    console.log(i);
  }
}
