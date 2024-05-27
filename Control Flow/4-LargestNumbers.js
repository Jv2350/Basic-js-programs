let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
let num3 = Math.floor(Math.random() * 10);
let largest;

if (num1 > num2 && num2 > num3) 
    largest = num1;
else if (num2 > num1 && num2 > num3) 
    largest = num2;
else 
largest = num3;

console.log(
  `Largest number between ${num1}, ${num2} and ${num3} is ${largest}`
);
console.log(
  `Largest number between ${num1}, ${num2} and ${num3} is ${Math.max(num1,num2,num3)}`
);
