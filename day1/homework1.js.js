// Calculate area of a rectangle
// Store the length of rectangle.
// Store the width of rectangle.
// Calculate the area and print the output "The area of the rectangle is: NN"

let length = 10;
let width = 5;
let area= length*width;
console.log("area of a rectangle :", area,"cm");


// The Temperature Converter
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsius = 30;
var celsiusInF = (celsius*9)/5 + 32;
console.log(celsius + '°C is ' + celsiusInF + '°F');
var fahrenheit = 20;
var fahrenheitInC = ((fahrenheit - 32)*5)/9;
console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');



// Numbers' summations
// Loop though this array let Numbers = [23,54,32,87,47] and print the sum of all numbers

 const array1=[16,4,2,0,19,6];
let sum1=0;
for(i=0;i < array1.length;i++){
    sum1 +=array1[i];
}
console.log("sum of arrary= ", sum1);



// Reverse Array
// Create an array of the following numbers [1,2,3,4,5,6,7,8,9,10]
// print the array in a reverse order

const arr=[1,2,3,4,5,6,7,8,9,10];
revers=arr.reverse();
console.log(revers);



// stars pattern
// Declare a variable and assign a number to it.
// Print a right angle triangle using stars to the console. Example: if the variable is 5, the printed pattern will be as follow:
// *
// **
// ***
// ****
// *****

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
