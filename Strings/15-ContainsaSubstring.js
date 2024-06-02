const str = prompt("Enter a string: ");
const checkStr = prompt("Enter a string that you what to check: ");

if(str.includes(checkStr)){
    console.log(`${str} includes ${checkStr}`);
}else{
    console.log(`${str} does not include ${checkStr}`);
}