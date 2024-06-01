function replaceString(string, subString, rString) {
    const newString = string.replace(subString, rString);
    return newString;
}

const string = prompt("Enter a string: ");

const subString = prompt("Enter a substring: ");
const rString = prompt("Enter a string: ");
console.log(`"${string}" after replacing "${subString}" to "${rString}" :${replaceString(string, subString, rString)}`);