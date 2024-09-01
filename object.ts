let person3 = {
    userName:"Vignesh",
    age:30,
    married:true
}
console.log(person3.userName);

type StudentDetails = {
    userName:string,
    age:number,
    married:boolean
}

const sandeepData:StudentDetails = {
    userName:"Sandeep",
    age:30,
    married:true
} 

const dhrumilData:StudentDetails = {
    userName:"Dhrumil",
    age:30,
    married:false
}

const studentAttended = {...sandeepData, ...dhrumilData};
console.log(studentAttended)