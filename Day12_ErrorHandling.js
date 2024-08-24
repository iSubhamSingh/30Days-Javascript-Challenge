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


//Task 2

function divideNumbers(a,b) {
    if (b == 0) {
        throw new Error("Can't divide by 0");
    }
    return a/b;
}

try {
    console.log(divideNumbers(10, 2));
    console.log(divideNumbers(10, 0));
}catch (error) {
    console.log("Error", error.message);
}