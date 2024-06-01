const string = prompt("Enter a string: ")
const anotherString = prompt("Enter another string: ")

if (string.startsWith(anotherString)) {
    console.log(`${string} starts with ${anotherString}`);
}else{
    console.log(`${string} does not start with ${anotherString}`);
}