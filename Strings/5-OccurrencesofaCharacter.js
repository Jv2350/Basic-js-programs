function countString(str, letter) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == letter) {
      count += 1;
    }
  }
  return count;
}

const string = prompt("Enter a string: ");
const char = prompt("Enter a character: ");

console.log(
  `Number of "${char}" in "${string}" are ${countString(string, char)}`
);
