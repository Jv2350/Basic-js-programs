// factors of a number.

const number = Math.round(Math.random() * 100);

console.log(`Factors of ${number} are`);
for(let i =0 ; i <= number; i++){
    if(number % i == 0){
        console.log(i);
    }
}