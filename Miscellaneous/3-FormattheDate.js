let currentDate = new Date();

let day = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();

if (day < 10) {
  day = "0" + day;
}
if (month < 10) {
  month = "0" + month;
}


// various date formats
const formatedDate1 = day + "/" + month + " /" + year;
console.log(formatedDate1);

const formatedDate2 = day + "-" + month + "-" + year;
console.log(formatedDate2);

const formatedDate3 = month + "/" + day + "/" + year;
console.log(formatedDate3);

const formatedDate4 = month + "-" + day + "-" + year;
console.log(formatedDate4);
