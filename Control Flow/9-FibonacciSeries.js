const numbers = Math.round(Math.random()*10);

console.log(numbers);
let n1, n2, n3;
n1 = 0;
n2 = 1;

for (let i = 0; i <= numbers; i++) {
  console.log(n1);
  n3 = n1 + n2;
  n1 = n2;
  n2 = n3;
}
