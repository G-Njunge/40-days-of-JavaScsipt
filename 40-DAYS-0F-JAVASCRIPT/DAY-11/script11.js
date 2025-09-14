 
//4. Write a function createMultiplier(multiplier) 
//that returns another function to multiply numbers.


function createMultiplier(multiplier=3){
    let originalNumber = 3
    return function(){
        let value = originalNumber*multiplier
         console.log(`Value is ${value}`)
    }
}
const mult = createMultiplier(4)
mult()

//6. Write a function factory of counter to increment, decrement, and reset a counter.
//Use closure to refer the count value across the functuions.

//outer function which initializes the counter variable and asks the user what they would love do to
 function counterFactory() {
    let counter = 0;
    let obj={
        "increment": function() {console.log (++counter)},
        "decrement": function() {counter--},
        "reset": function(){counter=0}
    }
    return obj 
 }

 const count = counterFactory();
count.increment()
count.increment()
