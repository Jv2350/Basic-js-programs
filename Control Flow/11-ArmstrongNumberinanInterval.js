const min = Math.round(Math.random() * 10);
const max = Math.round(Math.random() * 900) + 100;
let armstrongNumbers = [];

for (let i = min; i <= max; i++) {
  let num = i;
  let sum = 0;
  let numDigits = num.toString().length;

  for (let temp = num; temp > 0; temp = Math.floor(temp / 10)) {
    let digit = temp % 10;
    sum += Math.pow(digit, numDigits);
  }

  if (sum === i) {
    armstrongNumbers.push(i);
  }
}

if (armstrongNumbers.length > 0) {
  console.log(
    `Armstrong numbers between ${min} and ${max} are: ${armstrongNumbers.join(
      ", "
    )}`
  );
} else {
  console.log(`There are no Armstrong numbers between ${min} and ${max}.`);
}
