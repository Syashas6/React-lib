var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function double(number) {
  return number * 2;
}
const newNumbers = numbers.map(double);

console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

const filterNum = numbers.filter(function (number) {
  return number > 10;
});

console.log(filterNum);
//Reduce - Accumulate a value by doing something to each item in an array.

const sum = numbers.reduce(function (accumulator, newNumber) {
  return accumulator + newNumber;
});
console.log(sum);

//Find - find the first item that matches from an array.

const founds = numbers.find(function (num) {
  return num > 10;
});

console.log(founds);

//FindIndex - find the index of the first item that matches.

const foundind = numbers.findIndex(function (num) {
  return num > 10;
});

console.log(foundind);
