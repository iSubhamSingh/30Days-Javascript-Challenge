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



//Activity 3
//Task 4

async function asyncFunction1() {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved after 2 seconds for task 4");
    }, 2000);
  });

  const result = await promise;
  console.log(result);
}

asyncFunction1();



//Task 5

async function asyncFunction2() {
  const promise = new Promise((_, reject) => {
    setTimeout(() => {
      reject("Task 5: Promise rejected");
    }, 2000);
});

  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

asyncFunction2();

//Activity 4
//Task 6

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    console.log("Resolved promise from fetch", data);
})
  .catch(error => {
    console.error(error);
});



//Task 7

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log("Data fetched using fetch api", data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();


//Activity 5
//Task 8

const promiseA = new Promise((resolve) => setTimeout(() => resolve("Promise A resolved"), 1000));
const promiseB = new Promise((resolve) => setTimeout(() => resolve("Promise B resolved"), 2000));
const promiseC = new Promise((resolve) => setTimeout(() => resolve("Promise C resolved"), 3000));

Promise.all([promiseA, promiseB, promiseC]).then((values) => {
  console.log("All promises resolved", values);
});


//Task 9


const promiseX = new Promise((resolve) => setTimeout(() => resolve("Promise X resolved"), 1000));
const promiseY = new Promise((resolve) => setTimeout(() => resolve("Promise Y resolved"), 2000));
const promiseZ = new Promise((resolve) => setTimeout(() => resolve("Promise Z resolved"), 3000));

Promise.race([promiseX, promiseY, promiseZ]).then((value) => {
  console.log("Promise resolved for task 9", value);
});