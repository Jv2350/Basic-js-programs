function firstLetterUc(string){
    const capitalized = string.charAt(0).toUpperCase() + string.slice(1);

    return capitalized;
}

const string = prompt("Enter a string: ");
console.log(`"${string}" after capitalization: "${firstLetterUc(string)}"   `)