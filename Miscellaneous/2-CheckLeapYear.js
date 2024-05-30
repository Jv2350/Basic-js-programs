function checkLeapYear(year) {

  // conditions 
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}

const year = Math.floor(Math.random() * 3000) + 1582;
console.log(checkLeapYear(year));
