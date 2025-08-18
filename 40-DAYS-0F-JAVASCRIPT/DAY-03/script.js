let number = prompt("Please enter a number: ");
let number_div = (number%2);
if (number_div === "0"){
    console.log(`${number} is even`);
} else {
    console.log(`${number} is odd`);
}


let age = prompt("What is your age?: ")
if (age >= "18"){
    console.log("You are eligible for a drivers licence");
} else {
    console.log ("You aren't elidible for a drivers license because you're age is below 18 years");
}

const basic_salary = 12300;
let annual_salary = (basic_salary*12)
let bonus = ((20/100) * annual_salary);
let CTC = (annual_salary + bonus);
console.log(`Your CTC is ${CTC} rupees` );

let year = prompt("What year are you in?: ")
let units = prompt("How many units do you use in a day?: ")
let monthly_cost1 = (units*150*31); 
let monthyly_cost2 = (units*150*30);
let monthly_cost3 =  (units*150*28);
let monthly_cost4 = (units*150*29);
let annual_cost;
let discounted_annual_cost;

if ( (year%4 === 0 && year%100 !== 0) || (year%400 === 0)){
    annual_cost = ((monthly_cost1*7)+(monthyly_cost2*4)+(monthly_cost4));    
} else {
    annual_cost = ((monthly_cost1*7)+(monthyly_cost2*4)+(monthly_cost3));
}
discounted_annual_cost = (annual_cost * 0.8);
console.log(`Your annual electrical cost is ${discounted_annual_cost} rupees`);

let q = prompt("Enter number q: ");
let r = prompt("Enter number r: ");
let p = prompt("Enter number p: ");
let max;

if (q > r){
   max = (q > p) ? q : p;  
} else {
    max = (r > p) ? r : p;      
}

console.log(`The maximum number is ${max}`);

let count = 23
let double = count << 1;
console.log(`${double}`)