//Activity 1
function evenOdd(num){
    if(num %2 == 0){
        return "even"
    }
    return "odd"
}
console.log(`Number is ${evenOdd(9)}`);

function square(num){
    return num*num;
}
console.log(`Square is : ${square(5)}`);


//Activity 2
function maximum(num1, num2){
    if(num1 > num2)
        console.log(`${num1} is greater than ${num2}`);
    else
        console.log(`${num2} is greater than ${num1}`);
}
maximum(4,8)


function concat(str1, str2){
    return str1 + str2;
}
console.log(concat("Hello"," world"));

//Activity 3
let sum = (num1, num2) => {
    return num1+num2;
}
console.log(`Sum is ${sum(4,3)}`);

let check = (str1, str2) => {
    return str1.indexOf(str2);
}
(check("hello","l") > 0) ? console.log(`String contains the character`) : console.log(`String doesn't contain the character`);


//Activity 4
function product(num1, num2 = 1){
    return num1 * num2;
}
console.log(`Product is : ${product(4,9)}`);

function greeting(name, age = 18){
    if(age < 18)
        return `Hello little ${name}`;
    if(age >= 18 && age <= 60)
        return `Hello ${name}`;
    else
        return `Hello old ${name}`;
}
console.log(greeting("jack", 85));


//Activity 5
function higherOrderFn(fun, num){
    while(num >= 0){
        fun();
        num--;
    }
}
function fun(){console.log("Function is called");}
higherOrderFn(fun, 4);