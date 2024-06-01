function Reverse(string){
    let newString ="";
    for(let i=string.length-1;i>=0;i--){
        newString+=string[i];
    }
    return newString;
}

const string = prompt("Enter a string: ");
console.log(`Reverse of ${string} : ${Reverse(string)}`);


// using reverse method
const RevString = (str)=>{
    const arrString = str.split("");
    const revString = arrString.reverse();
    const joinArr = revString.join("");

    return joinArr;
}

console.log(`Reverse of ${string} : ${RevString(string)}`);