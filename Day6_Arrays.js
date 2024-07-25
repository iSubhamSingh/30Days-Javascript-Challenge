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
//Task7

let numbers = [1, 2, 3, 4, 5]; 
let square = numbers.map(number => {
  return number * number;
});
console.log(square);

//Task8
let even = numbers.filter(num => num % 2 === 0)
console.log(even);

//Task9
let sum = numbers.reduce((accumulator, number) => {
  return accumulator += number;
},0)
console.log(`Sum is ${sum}`);


//Activity4
//Task10
console.log("Elements of array:");
for(let i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
}

//Task11
console.log("Elements of the array iterated using for each loop: ");
numbers.forEach(number => {
  console.log(number);
})



//Acitvity5
//Task12
console.log("Element of multidimenstional array : ");
let mdArray =[[1,2,3],[4,5,6],[7,8,9]];
for(let i = 0; i < mdArray.length; i++){
  for(let j = 0; j < mdArray[i].length; j++){
    console.log(mdArray[i][j]);
  }
}

//Task13
console.log(mdArray[0][1]);