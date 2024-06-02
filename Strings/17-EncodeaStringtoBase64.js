const str = "Hello world";


// encoding 
const result = window.btoa(str);   
console.log(result)

// decoding
const result1 = window.atob(result);
console.log(result1);

