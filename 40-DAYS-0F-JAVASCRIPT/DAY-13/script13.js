 "use strict";

// in GEC, this points to the window
console.log("global this", this)

//In an object
//When we invoke a method inside an object, the value/context of this bound to the object in whch the method is in
//This is called Implicit Binding
let student = {
    id: 1786,
    class: "four",

    returnThis: function() {return this;},

    getFullName: function() {
        return `${this.id}, ${this.class}`
    }

}
    
console.log ("this in a method embedded on an object", student.returnThis())

// A property inside an object that is a function is called a method

function greetStudent (obj){
    obj.sayHi = function(){console.log(`Hey, ${this.class}, this is your id: ${this.id}`)}
    console.log(obj)
}
greetStudent(student)
student.sayHi()

// An outer or inner function as long as they are not in the Object, always point to windows

// when you run java script in sctrict mode, it doesn't allow for errors however minor.
// hence this even in a a stand alone function, or an inner function. This is declared as undefined

function trial() {console.log("you", this)}
trial()

//this keyword in an arrow function will always be resolved by the outer scope because arrow function do not have their own this, even in strict mode
const food = {
    fruit : "yellow",
    color: "mango",
    trial1: () => `${this.fruit}`  
}
 console.log(food.trial1()) //will print undefined because the outer scope is the GEC and GEC doesn't have name 

// Explicit binding

//Call method 

function greeting(hobby){
    console.log(`Hello, ${this.name} belongs to ${this.address} and likes ${hobby}`);
}

const user = {
    name: "grace",
    address: "here"
}

greeting.call(user)
//using a parameter in functions
greeting.call(user, "Teaching")
//using multiple parameters

//apply - only works with arrays - could use call in a similar manner
const hobby = ["sleeping eating laughing"] //you could also use a list say if you're planning to loop over them
greeting.apply(user, hobby)


//bind 
//bind creates a new function that you cuold always use later

const greetfunc = greeting.bind(user,hobby);
greetfunc()

const trees = function(type, height){
    this.type = type;
    this.height = height;
    this.show = function(){
        console.log(`${type} and ${height}`)
    }
}

const cypress = new trees("Cypress", "154m")//creating instances
const oakwood = new trees("Oakwood", "220m")

cypress.show()

const user1 = {
name: "tapaScript",
greet: function () {
    console.log(`Hello, ${this.name}!`);
},
};
user1.greet()

const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

obj.greet()

function Sports(name,number){
    this.name = name,
    this.number = number
    this.games=function(){
        console.log(`${this.name} has been played ${this.number} times`)
       }
    }

const netball = new Sports("netball", "5")
netball.games()

//6. Can you attach the car1's describe() method to car2 object? 
// Give all possible solutions that you can think of
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};

car1.describe.call(car2)
const bmw = car1.describe.bind(car2)
bmw()