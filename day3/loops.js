// Loops basically mean you keep doing something similar/same until a condition tells you to stop

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

let x = 0;

// while (x < 6) {
//   console.log(x);
//   //   x = x + 2;
//   x += 2;
// }

// do {
//   console.log(x);
//   x += 2;
// } while (x < 6);

// FOR EACH loop

let arrayOfNumbers = [5, 6, 3, 8, 1, 9];

// console.log(arrayOfNumbers[0]);
// console.log(arrayOfNumbers[1]);
// console.log(arrayOfNumbers[2]);
// console.log(arrayOfNumbers[3]);
// console.log(arrayOfNumbers[4]);
// console.log(arrayOfNumbers[5]);

arrayOfNumbers.forEach(function (currentValue, index, array) {
  console.log(currentValue);
  //   console.log(index);
});
