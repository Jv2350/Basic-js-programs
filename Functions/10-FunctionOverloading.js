function sum() {
  if (arguments.length == 0) {
    console.log("No arguments passed");
  } else if (arguments.length == 1) {
    console.log("Atleast provide two arguments");
  } else {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    console.log(sum);
  }
}

sum();
sum(1);
sum(2, 4, 5, 67, 8, 7, 65, 4);

// using switch statement
function sum() {
  switch (arguments.length) {
    case 0:
      console.log("Now arguments passed");
      break;
    case 1:
      console.log("Atleast provide two arguments");
      break;
    default:
      let sum = 0;
      for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
      }
      console.log(sum);
      break;
  }
}

sum();
sum(1);
sum(2, 4, 5, 67, 8, 7, 65, 4);
