"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { findTitles, addBook, findIDs, findAuthors }; //add all of your function names here that you need for the node mocha tests

let library = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {
  const titles = findTitles();
  titles.sort();
  const titleString = titles.join("\n");

  let textArea = document.getElementById("displayArea");
  textArea.innerHTML = titleString;
}

/**
 *
 * @return {object} array holding all titles as elements
 */
function findTitles() {
  let titles = [];

  for (let book of library) {
    titles.push(book.title);
  }
  titles.sort();

  return titles;
}
/**
 *
 * @returns{Array} ids
 */
function findIDs() {
  let ids = [];
  for (let book of library) {
    ids.push(book.libraryID);
  }
  ids.sort();
  return ids;
}
/**
 *
 * @returns{Array} Authors
 */
function findAuthors() {
  let authors = [];
  for (let book of library) {
    authors.push(book.author);
  }
  authors.sort();
  return authors;
}
/**
 *
 * @param {String} title the title
 * @param {String} author the author
 * @param {Number} libraryID id of the book
 * @returns {Object} new book
 */
function addBook(title, author, libraryID) {
  const newBook = {};
  newBook.author = author;
  newBook.libraryID = libraryID;
  newBook.title = title;
  library.push(newBook); //finish the implementation -- get the author, create a book object, and add to the library array
  return newBook;
}
/**
 *
 * @returns {Object} new Book
 */
function addBookToLibrary() {
  const title = document.getElementById("title"); //retrieves the book title from the title
  const libraryID = document.getElementById("libraryID");
  const author = document.getElementById("author");

  const newBook = {};
  newBook.author = author;
  newBook.libraryID = libraryID;
  newBook.title = title;
  library.push(newBook); //finish the implementation -- get the author, create a book object, and add to the library array

  const bookString = newBook.join("\n");

  let textArea = document.getElementById("displayArea");
  textArea.innerHTML = bookString;
}
