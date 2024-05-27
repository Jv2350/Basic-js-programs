const num = Math.round(Math.random() * 10);
const range = Math.round(Math.random() * 10);

console.log(`${num} tabel till ${range}`);

for (let i = 1; i <= range; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}
