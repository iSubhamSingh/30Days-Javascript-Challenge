//Activity 1
//Task 1
let name = "John Doe", age = 60;
console.log(`Name : ${name}, Age : ${age}`);

//Task 2
let multiLineStr = `First line 
            Second line
            Third line `

console.log(multiLineStr);

//Activity 2
//Task 3
const numsArr = [1,2,3,4,5,6,7,8];
let [a,b] = numsArr;
console.log(`${a}, ${b}`);

//Task 4
const book = {
    title : "Atomic Habits",
    author : "James Clear"
}

const {title, author} = book;
console.log(`${title}, ${author}`);

//Activity 3
//Task 5
let newArr = [...numsArr];
newArr.push(9,10);
console.log(newArr);

//Task 6
console.log("Sum of the arguments : ");
function sumArgs(...args){
    return args.reduce((sum, iterator) => sum += iterator,0)
}
console.log(sumArgs(1,2,3,4,5));



//Activity 4
//Task 7
function product(num1, num2 = 1){
    return num1*num2;
}
console.log(`Product with second parameter : ${product(4,5)}`);
console.log(`Product without second parameter : ${product(4)}`);


//Activity 5
//Task 8
