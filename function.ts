/*
function functionName(){
}

function functionName(parameterName:dataType){
logic to use that parameter
}

function functionName(parameterName1:dataType, parameterName2?:dataType, parameterName3:dataType=value){
logic to use that parameter
}



*/

// function greeting(){
//     console.log("Welcome Students");
//     console.log("Hows your TS learning ??");
// }

// function greeting(studentName:string){
//     console.log("Welcome "+studentName); // Way 1
//     console.log(`Welcome ${studentName}`); // Way 2
// }

function greeting(studentName:string, location?:string, batchMonth:string="August 2024"){
    console.log("Welcome "+studentName);
    console.log("You are from "+location);
    console.log("You are part of batch - "+batchMonth);
}

function multiply(a:number,b:number):number{
    return a*b;
}

const multiplyArrow = (a:number,b:number):number => {
    return a*b
};


const multiplyArrow2 = (a:number,b:number):number => {
    console.log("This is a multiply method");
    return a*b
};

let output:number= multiplyArrow2(10,20);