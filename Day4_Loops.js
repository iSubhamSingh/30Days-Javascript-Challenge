//Activity 1
console.log("Printing from 1 to 10");
for(let i = 1; i <= 10; i++){
    console.log(i);
}

console.log("Printing table of 5");
for(let i = 1; i <= 10; i++){
    console.log(5 * i);
}

//Activity 2
console.log("Finding sum of 1 to 10");
let i = 1, sum = 0;
while(i <= 10){
    sum += i;
    i++;
}
console.log(`Sum from 1 to 10 is ${sum}`);

console.log("Printing numbers from 10 to 1");
let j = 10;
while(j >= 1){
    console.log(j);
    j--;
}

//Activity 3
console.log("Printing from 1 to 5 using do while loop");
let k = 1;
do{
    console.log(k);
    k++;
}while(k <= 5);

console.log("Calculating factorial of a number using do while loop");
let num = 5;
let fact = 1;
do{
    fact *= num;
    num --;
}while(num > 0);
console.log(`Factorial of ${num} is ${fact}`);

//Activity 4
console.log("Pattern");
for(let i = 1; i <=5 ; i++){
    for(let j = 1; j <= i; j++){
        process.stdout.write(" *"); 
    }
    console.log();
}

//Activity 5
console.log("Printing from 1 to 10 while skipping 5");
for(let i = 1; i <= 10; i++){
    if(i == 5)
        continue;
    console.log(i);
}

console.log("Stopping loop when number is 7");
for(let i = 1; i <= 10; i++){
    if(i == 7){
        break;
    }
    console.log(i);
}