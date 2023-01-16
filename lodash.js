const _ = require('lodash');

var cars = ["Mercedes", "Ferrari", "Mclaren", "Aston Martin", "Renault", "Alfa Romeo"];

// Finding index of given item inside the car array
console.log(_.indexOf(cars, "Mercedes"));

// splitting the cars array into seperate arrays of two items from original array
var splitArray = _.chunk(cars, 2);

console.log(splitArray);

// Checking to see if what is passed into it is an array and return a boolean value
console.log(_.isArray(cars));

// Changes string to snake case
console.log(_.snakeCase('Hello world'));