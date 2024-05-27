const number = Math.floor(Math.random() * (1 + 1 + 1)) - 1;
if (number > 0) {
  console.log(`${number} is positive`);
} else if (number < 0) {
  console.log(`${number} is negative`);
} else {
  console.log(`${number} is zero`);
}

// nested if else
if (number >= 0) {
  if (number == 0) {
    console.log(`${number} is zero`);
  } else {
    console.log(`${number} is positive`);
  }
} else {
  console.log(`${number} is negative`);
}
