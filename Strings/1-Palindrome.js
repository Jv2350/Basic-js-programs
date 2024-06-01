function Palindrome(string) {
  const len = string.lenght; //get the length of the string

  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return `${string} is not a valid palindrome`;
    }
  }
  return `${string} is a valid palindrome`;
}

const string = prompt("Enter a string: ");
console.log(Palindrome(string));
