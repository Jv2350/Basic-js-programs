// The Highest Common Factor (HCF) or Greatest Common Divisor (GCD) of two integers is the largest integer that can exactly divide both integers (without a remainder).For example, the HCF of 60 and 72 is 12.

const num1 = Math.round(Math.random() *100);
const num2 = Math.round(Math.random() *100);

let hcf;
for (let i = 1; i <= num1 && i <= num2; i++) {
    if(num1 % i==0 && num2 % i==0){
        hcf = i;
    }
}

console.log(`HCF of ${num1} and ${num2} is ${hcf}`);