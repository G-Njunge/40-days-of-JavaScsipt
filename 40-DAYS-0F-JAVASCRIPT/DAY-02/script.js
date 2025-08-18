console.log("Variables!!");
//Just add one student name
let student={
    name:["Shantel"],
    age: 12,
    isStudent: true,
    favLanguage: "Python"
};
student.name.push("Shane")

console.log(student);

//Adding another student
let student1=[{
    name:"Shantel",
    age: 12,
    isStudent: true,
    favLanguage: "Python"
}];
student1.push({
    name:"Shane",
    age:10,
    isStudent: false,
    favLanguage: "Java"

});

console.log(student1);