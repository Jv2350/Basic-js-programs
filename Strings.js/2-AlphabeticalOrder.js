const string = prompt("Enter a string: ");

// converting into array
const word = string.split(" ");

word.sort();

// directly on the string
console.log("The sorted words are: "+word.join(" "));

// single single array element
for(let element of word){
    console.log(element);
}