// A function is a reusable block of code that you can represent with a name

x = 1;

function addOne() {
  x += 1;
}
addOne();
addOne();
addOne();
addOne();
addOne();

function addTwo() {
  x += 2;
}
addTwo();
addTwo();

function convertXToPounds() {
  x = x * 2.2;
}
convertXToPounds();

console.log(x);

// Arguments

let myHeight = 167;
let friendHeight = 175;

function cmToFeat(height) {
  return height * 0.0328;
}

console.log(cmToFeat(myHeight));
console.log(cmToFeat(friendHeight));

myHeightinFeat = cmToFeat(myHeight);
console.log(myHeightinFeat);
