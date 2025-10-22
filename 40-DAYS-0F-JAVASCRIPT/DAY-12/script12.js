//objects class tryouts

const classs = "class"

let user ={
    namer : ["Dan"],
    [classs] : 4
}
user.grade = "A"
console.log(user.grade)
user["is well mannered"] = true
console.log(user["is well mannered"])
user.grade = 'b'
user.namer.push("Angel")
const names = "namer"
console.log(user)

//Create a constructor function for a house

function House(type, year){
    this.type = type
    this.year = year
}
let vic = new House("Victorian", 2014)
console.log(vic)

// when the name of the parameters and kes are similar you can use object shorthand,

function farm(sheep, cattle){
    return{
        sheep,
        cattle,
        greet() {
            console.log(`hey ${this.sheep}`)
        }
    }

}

const farm1 = farm("merino","Heiford")
console.log(farm1.greet())

//Checking if a certain property exists
 console.log("tree" in farm)

//object.assign does a shallow copy i.e
// in nested objects it creates a new references for the nested objects

let me = {
    n:"Grace",
    a:21
}

let me1 = Object.assign({},me )

//object.entries changes an object to an array, helps with looping through an object.

let newObject = Object.entries(me) 
console.log(newObject)

//A Map in JavaScript is not an array, but a special collection
// that stores key-value pairs, similar to objects—but with much more flexibility:

const entries = new Map([
    ["foo", "bar"],
    ["bar", 43]
]);

//fromEntries reverses the above process
const objEntries= (Object.fromEntries(entries))
console.log(objEntries);

//freeze is kinda like const - makes an object immutable
//isfrozen chacks whether an object is frozen or not
const unchangable = Object.freeze(me1);
unchangable.n = "Yaaay";
console.log(unchangable.n)

//seal kinda does the same thing as freeze buttt 
//you can modify existing things cant add new things or delete existing stuff  

//hasOwn checks if a particular key exists in an object

//let's do deconstruction
//helps you retrieve values of keys as variables and even add properties to an object in a more efficient way.
//you can also assign new variables names to the newly declared variables
const {n, clear = 4, nLength =n.length} = me1;
console.log(n, nLength)

//used in aliases
 const {n:namesies} = me1;
 console.log(namesies);

//dest in nested objects
const{n:{zip}} = me1 //if zip was an object inside of n

//you could also define vars and pass them as paramaters in functions, cleeeaann!!
greet = ({a} = me1) => console.log(`hey ${a}`);
greet()

//I could also use destructuring to loop through arrays with objects
//Assuming we have an array containing different student names
//for(let {name, grade} of student);

//Optional chaining
//helps us to handle errors gracefully
//let's say I'm trying to get a value from an object that doesn't exist
//insted if crushing my program, I would rather use optional chaining

const namie = me1.you?.her
if (me1.you?.her){
    console.log("Is there")
} else console.log("Is not there")

//let {name, company:{name:companyName, location:{city}}} = person;


//Student Management system
//Store student details in an object (name, age, grades).
//Implement a method to calculate the average grade
//Add functionality to check availability and add new student

let studentDetails = {
    student1: {
        sname:"Gideon",
        age: 4,
        grade: 84
    },
    student2: {
    sname: "Amara",
    age: 6,
    grade: 92
    },
    student3: {
        sname: "Kwame",
        age: 5,
        grade: 77
    },
    student4: {
        sname: "Lillian",
        age: 7,
        grade: 88
    },
    student5: {
        sname: "Tobias",
        age: 6,
        grade: 81
    }
}

function averageGrade1(){
    let studentArray = Object.entries(studentDetails)
    let totalGrade1 =0 
    for (let [student,{grade}]of studentArray){
        totalGrade1+=grade;
    }
    let averageGrade1= totalGrade1/studentArray.length
    console.log(averageGrade1)
}

studentDetails.student9 ??={ sname: "Grace", age: 6, grade: 86}
console.log(studentDetails)
averageGrade1()

const person = { name: "John" };
const newPerson = person;
newPerson.name = "Doe";
console.log(person.name);

const users = [
  {
      'name1': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name3': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];

for (user of users){
    console.log(user)

    // for (let [key, value] of Object.entries(user)) {
    //     console.log(`${value}`)
    //}
} 