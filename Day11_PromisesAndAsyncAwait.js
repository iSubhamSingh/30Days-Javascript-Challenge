//Activity 1

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


//Activity 2
//Task 3

const fetchData1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Resolved first promise");
  }, 1000);
});

const fetchData2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Resolved second promise");
  }, 2000);
});

const fetchData3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Resolved third promise");
  }, 3000);
});

fetchData1
  .then((message) => {
    console.log(message);
    return fetchData2;
})
  .then((message) => {
    console.log(message);
    return fetchData3;
})
  .then((message) => {
    console.log(message);
});
