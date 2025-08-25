//1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
let space = "" ;
for (let j = 1; j<=5; j++){
    let row =  ""

    for(let i = 1; i<=j; i++){
        row += "* " 
    } 
    console.log(row)
}



// Write a program to print the multiplication table of a given number up to 10. 

let n=9;

for (i=1; i<=7; i++){
    product = n * i;
    console.log(`${n} x ${i} = ${product}`);
}

//3. Find the summation of all odd numbers between 1 to 500 and print them on teh console log
let sum = 0
for (i = 1; i <= 500; i++){
    if (i % 2 != 0){
        sum += i;  
    }
}
console.log(sum)

//Write a program to print numbers from 1 to 20,
//  but skip multiples of 3.
let row = ""
for(i = 1; i <= 20; i++){
    
    
    if (i % 3 === 0){
        continue
    } else {
        row += `${i} ` 
    }

}
console.log( row ) 

//Write a program to reverse the digits of a given number using a while loop.

let number = 67894;
let reverse = "";

while (number > 0){
    let digit = (number % 10);
    reverse += digit
    number = Math.floor(number/10) 

}
console.log(reverse)