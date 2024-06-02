const str1 = "hello world";
const str2 = "hello world";

const result = str1.toUpperCase() === str2.toUpperCase();

if(result){
    console.log("Both strings are same");
} else{
    console.log("Both strings are not same");
}