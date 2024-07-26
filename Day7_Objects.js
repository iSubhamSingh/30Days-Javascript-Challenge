//Activity 1
//Task 1
let books = {
    title : "The Alchemist",
    author : "Paulo Coelho",
    year : 1988
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

