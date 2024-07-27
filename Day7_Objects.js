//Activity 1
//Task 1
let books = {
    title : "The Alchemist",
    author : "Paulo Coelho",
    year : 1988,
    titleYear : function(){
        return `Title : ${this.title},  Year : ${this.year}`
    }
}
console.log(books);

//Task 2
console.log(`Title of the book : ${books.title}`);
console.log(`Author of the book : ${books.author}`);


//Activity 2
//Task 3
function titleAuthor(){
    return `Book title : ${books.title} ,  Book author : ${books.author}`
}
console.log(titleAuthor());

//Task 4
function updateYear(year){
    books.year = year;
}
updateYear(1989)
console.log(books);

//Activity 3
//Task 5
let library = {
    name : "Computer Science",
    books: [
        {
            title: "The Self-Taught Computer Scientist ",
            author: "Cory Althoff",
            year: 2021
        },
        {
            title: "A Programmer’s Guide to Computer Science",
            author: "Dr. William Springer",
            year: 2019
        },
        {
            title: "The Pragmatic Programmer ",
            author: "Andrew Hunt",
            year: 1999
        }
    ]
}

console.log(library);

//Task 6
console.log(`Name of the library : ${library.name}`);
console.log("Titles of all the books in the library : ");
library.books.forEach(obj => {
    console.log(obj.title);
})


//Activity 4
//Task 7
console.log(`Title and year of the book : ${books.titleYear()}`);


//Activity 5
//Task 8
console.log("Printing properties of the book");
for (const key in books) {
    console.log(`${key} : ${books[key]}`);
}

//Task 9
console.log("All the keys and values of the object : ");
console.log(`Keys: ${Object.keys(books)},  Values: ${Object.values(books)}`);