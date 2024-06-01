function checkString(str) {
    if (str.startsWith("S") || (str.startsWith("s") && str.endsWith("G")) || str.endsWith("g")) {
        console.log("String starts with S and end with G");
    } else if (str.startsWith("S")) {
        console.log("The string starts with S but does not end with G");
    } else if (str.endsWith("G")) {
        console.log("The string starts does not with S but end with G");
    } else {
        console.log("The string does not start with S and does not end with G");
    }
}

let string = prompt("Enter a string: ");
checkString(string);
