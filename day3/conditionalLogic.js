let x = 7;

console.log(x === 7);

// == checks for value only
// === checks for value and data type

// >, < Larger than, smaller than
// >=, <= Larger than or equals to, smaller than or equals to

// OPERATORS

// COMPARISON OPERATORS

if (x > 5) {
  console.log("x is larger than 5");
} else {
  console.log("x is smaller than 5");
}

if (x > 700) {
  console.log("x is larger than 700");
} else if (x > 400) {
  console.log("x is smaller than 700 but larger than 400");
} else {
  console.log("x is smaller than 400");
}

// LOGIC GATES

// && AND GATE
// || OR GATE
// ! NOT

age = 10;
weight = 70;

if (age < 15 && weight > 50) {
  console.log("Overweight for this age");
} else {
  console.log("Not overweight");
}

let money = true;
let vip = false;

if (money || vip) {
  console.log("Allowed entry");
} else {
  console.log("Denied entry");
}

let y = 3;

if (!(y > 5)) {
  console.log("y is larger to 5");
} else {
  console.log("y is not larger to 5");
}
