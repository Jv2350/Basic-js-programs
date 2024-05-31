function greeting() {
  console.log("How are you?");
}

setTimeout(greeting, 3000);
console.log("This shown first!");


// passing parameters;
function greet(x,y){
    console.log(x);
    console.log(y);
}

setTimeout(greet, 2000, "Jayesh","Hello");
console.log("After 2 seconds: ")
