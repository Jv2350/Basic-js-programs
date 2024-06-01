const number = 123.29384732987;
const result1 = "$" + number;
console.log(result1);


// using toLocaleString

const result2 = (number).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
});

console.log(result2);


