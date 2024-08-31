// If I am a Non married - I can be happy. I can play. I can go with my friends
// If I am married - I have to work. I have to cook.

/*
If Block
Syntax -
if(true){
logic
}
*/

let age2 = 10;
if(age2>18){
    console.log('I am an Major');
    console.log('I can Vote');
    console.log('I am in College');
}

/*
If Else Block
Syntax -
if(true){
logic
}
else{
logic
}
*/

let age3 = 10;
if(age3>18){
    console.log('I am an Major');
    console.log('I can Vote');
    console.log('I am in College');
}
else{
    console.log('I am a Minor');
    console.log('I canot Vote');
    console.log('I am in School');
}

/*
If Else-If Block
Syntax -
if(true){
logic
}
else if(true){
logic
}
else if(true){
logic
}
else{
logic
}
*/

let grade = 85;
if(grade>90){
    console.log('Super');
}
else if(grade>80 && grade<90){
    console.log('Very good');
}
else if(grade>70 && grade<80){
    console.log('Average');
}
else{
    console.log('Need to Improve');
}