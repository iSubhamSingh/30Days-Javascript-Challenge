//Activity 1
//Task 1

function throwError() {
    throw new Error("Error")
}
try {
    throwError();
} catch (error) {
    console.log("Error handled", error.message);
}

