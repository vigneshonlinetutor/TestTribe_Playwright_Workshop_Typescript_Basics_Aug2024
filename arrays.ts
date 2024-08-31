// Array Litreal Syntax
let fruits:string[] = ["Banana", "Mango", "Kiwi"];
let students:string[] = ["Sandeep", "Rajani"];
console.log(students);
// console.log(fruits[1]);
// console.log(fruits);

// Array Constructor
// let fruits2:Array<number> = new Array("Banana2", "Mango2", "Kiwi2");

// console.log(fruits2);
fruits[1] = "Strawberry";
// console.log(fruits[1]);
// console.log(fruits);

students.push("Dhrumil");
console.log(students);
students.push("Ajay"); // Push as last element in Array
console.log(students);
students.pop();
console.log(students);
students.shift();
console.log(students);
students.unshift("Vignesh"); // Unshift is Push to 1st element
console.log(students);