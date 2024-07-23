//Activity 1
//Task 1
let arr = [1,2,3,4,5]
console.log(arr);

//Task2
console.log(`First element : ${arr[0]},  Last Element: ${arr[arr.length-1]}`);

//Activity2
//Task3
arr.push(6);
console.log(`New array after push : ${arr}`);
arr.pop();
console.log(`New array after Pop : ${arr}`);
arr.shift()
console.log(`New array after shift : ${arr}`);
arr.unshift(1);
console.log(`New array after unshift : ${arr}`);

//Activity 3
//Task4

let numbers = [1, 2, 3, 4, 5]; 
let square = numbers.map(number => {
  return number * number;
});
console.log(square);