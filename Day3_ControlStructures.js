//Activity 1
let num = 10;
if(num > 0)
    console.log("Positive");
if(num < 0)
    console.log("Negative");
else   
    console.log("Zero");

let age = 20
if(age >= 18)
    console.log("Eligible to vote");
else
    console.log("Not eligible to vote");


//Activity 2
let a = 10;
let b = 5;
let c = 15;
if(a > b){
    if(a > c){
        console.log(`${a} is largest`);
    }
    else{
        console.log(`${c} is largest`);
    }
}
else{
    console.log(`${b} is largest`);
}


//Activity 3
let day = 4;
switch(day){
    case 1: console.log("Monday");
            break;
    case 2: console.log("Tuesday");
            break;
    case 3: console.log("Wednesday");
            break;
    case 4: console.log("Thursday");
            break;
    case 5: console.log("Friday");
            break;
    case 6: console.log("Saturday");
            break;
    case 7: console.log("Sunday");
            break;
    default: console.log("Invalid input");
}


//Activity 4
let ev = 4;
(ev %2 == 0) ? console.log("Even Number") : console.log("Odd Number");

//Activity 5
let year = 2016
if(year % 4 == 0){
    if(year % 100 != 0 || year % 400 == 0){
        console.log(`Year ${year} is a leap year`);
    }
    else
        console.log(`Year ${year} is not a leap year`);
}
else{
    console.log(`Year ${year} is not a leap year`);
}
