const string = prompt("Enter a string: ");

let asciiValue = string.codePointAt(0);
console.log(`ASCII value of ${string} is ${asciiValue}`);

asciiValue = string.charCodeAt(0);
console.log(`ASCII value of ${string} is ${asciiValue}`);

