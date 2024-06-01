const vowels = ["a", "e", "i", "o", "u"];

function countVowels(str){
    let count = 0;

    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}

const string = prompt("Enter a string: ");
console.log(`Number of vowels in ${string} : ${countVowels(string)}`);