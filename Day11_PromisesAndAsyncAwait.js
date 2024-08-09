//Activity

//Task 1

let promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved after 3 seconds");
    }, 3000);
});
  
  promise.then((message) => {
    console.log(message);
});
  
//Task 2

const promise2 = new Promise((_, reject) => {
  setTimeout(() => {
      reject("Task 2: Promise rejected after 2 seconds");
  }, 2000);
});

promise2.catch((error) => {
  console.log(error);
});
