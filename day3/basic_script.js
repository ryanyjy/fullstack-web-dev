var x = 5; // ES4
let y = 10; // ES 5

console.log(x + y);

console.log("1" + "1");

const myName = "Paul";

// myName = "Chris";

console.log("My name is " + myName);

console.log(x + " times " + x + " = " + x * x);

// BASICS

// DATA TYPES

// PRIMITIVE DATA TYPES
// Integer (2 billions positive, 2 billion negative)
// Decimals (Double, Float)
// Boolean (0, 1)
// String (Basically words enclosed in "" quotation marks)

let distance = 5.5;
let goThere = true;

console.log(distance);
console.log(goThere);

console.log(typeof distance);

// NON-PRIMITIVE DATA TYPES
// Objects (represented by {})
// Array (represented by [])

// Array
let students = ["Celine", "Gina", "Anith"];
console.log(students[1]);

// Object
let myDetails = {
  name: "Paul",
  age: "45",
  city: "Penang",
  students: students,
};
console.log(myDetails["name"]);
console.log(myDetails.name);
console.log(myDetails.students[0]);

let details = [
  {
    name: "Paul",
    age: "45",
    city: "Penang",
    students: students,
  },
  {
    name: "Chris",
    age: "47",
    city: "Penang",
    students: students,
  },
  {
    name: "Yeow",
    age: "49",
    city: "Selangor",
    students: students,
  },
];
console.log(details);
