const range = Math.round(Math.random() * 10);

let sum = 0;

for (let i =0 ; i<=range; i++){
    sum += i;
}

console.log(`Sum for first ${range} natural numbers is ${sum}`);