Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.
let result;
let operator = prompt("Which operator would you like to use?(Choose from 1-4)\n1.+\n2.-\n3./\n4.%");
const a = 8;
const b = 9;
switch (operator){
    case "1":
        result = (a + b);
        break;
    case "2":
        result = (a - b);
        break;
    case "3":
        result = (a / b);
        break;
    case "4":
        result = (a + b);
        break;
}
console.log(`The operation result is ${result}`)



//A triangle has 3 sides. A Triangle type is determined by its sides:

// All sides equal is called, Equilateral Triangle.
// Two sides equal is called, Isosceles Triangle.
// All sides different is called, Scalene Triangle.
// Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly.

let triangle_type;
const side_1 = 16;
const side_2 = 6;
const side_3 = 0;

if (side_1 === side_2){
    triangle_type = (side_2 === side_3) ? "equilateral triangle" : "isoscles triangle" ;
} else {
    if (side_1 === side_3){
        triangle_type="Isoscles"
    } else{
        triangle_type = (side_2 === side_3) ? "Isoscles":"scalene"
    }
}
 console.log(`${triangle_type}`)
