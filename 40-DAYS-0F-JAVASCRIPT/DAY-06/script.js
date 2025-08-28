function print(){
    return "Grace" ;
}
 
let print1 = print(); 
console.log(print1)

function namer(names){
    return `The child's name is ${names}`
}

console.log(namer(print1))


function sum(a=7, b=9, ... rest){
    function inner(){
    console.log ("Inner")
    }
    inner()
    return(a + b)

}

sum(4,6)
console.log(sum(5,6,7,8,8,8,8,8))

//Call backs 

function CheckNumber(number, onPositive,onNegative,onZero){
    if (number > 0){
        onPositive(number)
    } else if (number < 0){
        onNegative(number)
    } else{
        onZero(number)
    }
    console.log(number*number)
}

CheckNumber(6,
    function(t){console.log("The number is positive,",t )},
    function(t){console.log("The number is negative",t )},
    function(t){console.log("The number is zero",t )}
);

let hey = (namer) => `Your name is, ${namer}`
hey("Grace")

function game_ending(count){

    if (count === 0){
        console.log("Game is over!!")
        return;
    }
    console.log(`Game ending in ${count} seconds`)
    game_ending(count - 1);

}
game_ending(5)


// TASKS


//1.Create a function celsiusToFahrenheit(celsius) that converts a temperature from
//Celsius to Fahrenheit. Formula: (Celsius * 9/5) + 32 = Fahrenheit

const celsiusToFahrenheit = (celsius) =>celsius * (9/5) + 32
console.log(celsiusToFahrenheit(8))

//Write a function findMax(num1, num2) that returns the larger of the two numbers.
//It should work for negative numbers as well.

const findMax = (num1, num2)=>Math.max(num1, num2);
console.log (findMax(-3,1))

//Create a function isPalindrome(str) that checks if a given string is a palindrome
const isPalindrome = (str) => {
    //reverse str
    let rev_word = "";
    for (let i=str.length -1; i>=0; i--){
        rev_word += str[i];
    }
    //check if it's the same as the original
    if (rev_word === str){
        return "Palindrome"
    } else{
        return "Not a Palindrome"
    }
}

console.log (isPalindrome("true"));
isPalindrome("level");

//Create a function factorial(n) that returns the factorial of n

function factorial(n){
    let fac = Number(n);
    for (let i=n-1; i>=1; i--){
        fac *= i
    }
    return fac
}
console.log(factorial("4"))

//Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.
function countVowels(str){
    //split the string into individual counts
    const splitStr= str.toLowerCase().split("")
    //loop through the string and identify vowels
    let count = 0
    for (let i of splitStr){
        if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u"){
            count ++
        }
    }
    return(count)
    //establish  a counter that increases everytime a vowel is indentified

}

console.log(countVowels("Write a function greet(name, callback), where callback prints a message using the name parameter"))

//Write an IIFE that prints "Hello, JavaScript!" to the console.
//Here the Second word must be supplied using paramneter and argument.

// (function(greet){
//     console.log("Hello,", greet);
// }) ("JavaScript!");

//Write a function greet(name, callback),
//Where callback prints a message using the name parameter.

function greet(namie, callback){
    callback(namie)
}
greet("John",function (n){console.log ("Hello", n)})