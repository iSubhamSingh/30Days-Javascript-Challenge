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
  