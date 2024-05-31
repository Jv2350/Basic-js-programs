const date = new Date();

const n = (date.toLocaleDateString());
const time = (date.toLocaleTimeString());

console.log(`Date: ${n}`);
console.log(`Time: ${time}`);