// Arithmetic Operation
let a = 20;
let b = 10;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// Comparison Operators
let isEqual = a==b; // true
let isStrictEqual = a===b; // false
let notEqual = a!=b; // true
let notStrictEqual = a!==b; // true
let greater = a>b; // true
let smaller = a<b; // false
let greaterEqualTo = a>=b; // true
let smallerEqualTo = a<=b; // true

// Assignment Operator
let num = 5;
num += 10; // 15
num -= 10 // 5
num *= 10;
num /= 10;
num %= 10;

// Without Ternary Operator
// let age = 70;
// let message:string;

// if(age>=60){
//     message = "You are Senior Citizen";
// }
// else{
//     message = "You are Adult";
// }
// console.log(message);

// Ternary Operator
let age = 10;
let message = age>60 ? "Senior Citizen" : "Adult" 
console.log(message);