// default parameters function
function add(x = 10, y = 5) {
  return x + y;
}

console.log(add());
console.log(add(3));
console.log(add(3, 2));

// using previous parameters in default value expression
function sub(x = 10, y = x - 4) {
  return x - y;
}

console.log(sub()); // 10 - (10-4)=4
console.log(sub(5)); // 5 - (5-4)=4
console.log(sub(9, 4)); // 9 - (4)= 5
