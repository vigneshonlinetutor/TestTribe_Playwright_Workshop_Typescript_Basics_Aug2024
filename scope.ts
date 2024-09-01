/*
1. Global Scope
2. Function Scope / Local Scope
3. Block Scope
*/

// var nameBatch = "Aug 2024"

// const multiplyArrow3 = (a:number,b:number):number => {
//     let nameBatch2 = "August 2025";
//     console.log(nameBatch2)
//     console.log("This is a multiply method");

//     if(true){
//         let nameBatch3 = "August 2026"; 
//         console.log(nameBatch3)
//     }
//     console.log(name)

//     return a*b
// };

// var, let, const


// Var Keyword Scope
let globalVariable = "Global";

const multiplyArrow3 = (a:number,b:number)=> {
   let functionVaribale = "Function"
   console.log(functionVaribale);
    if(true){
        console.log(functionVaribale);
        let blockVariable = "Block";
        blockVariable = "Block2"
        console.log(blockVariable);
    }
    console.log(blockVariable);
};

console.log(globalVariable);
// console.log(functionVaribale);
// console.log(blockVariable);