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

  let textArea = document.getElementById("displayAreaTitle");
  textArea.innerHTML = titleString;
}
/**
 *@returns {undefined}
 */
function scramble() {
  const title = findTitles();
  let allWords = [];
  for (let oneTitle of title) {
    const titleArray = oneTitle.split(" ");
    for (let words of titleArray) {
      allWords.push(words);
    }
  }

  const asc = allWords.sort((aaa, bbb) => aaa.length - bbb.length);
  let str = asc[0];
  for (let i = 1; i < asc.length; i++) {
    if (asc[i - 1].length === asc[i].length) {
      str += " " + asc[i];
    } else {
      str += "\n" + asc[i];
    }
  }
  let textArea = document.getElementById("displayScrumble");
  textArea.innerHTML = str;
}
/**
 *@returns {undefined}
 */
function showIds() {
  const ids = findIDs();
  ids.sort();
  const idsString = ids.join("\n");

  let textArea = document.getElementById("displayAreaId");
  textArea.innerHTML = idsString;
}
/**
 *@returns {undefined}
 */
function showAuthors() {
  const authors = findAuthors();
  authors.sort();
  const authorsString = authors.join("\n");

  let textArea = document.getElementById("displayAreaAuthor");
  textArea.innerHTML = authorsString;
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
  const title = document.getElementById("title").value; //retrieves the book title from the title
  const libraryID = document.getElementById("libraryID").value;
  const author = document.getElementById("author").value;

  const newBook = {};
  newBook.author = author;
  newBook.libraryID = libraryID;
  newBook.title = title;
  library.push(newBook); //finish the implementation -- get the author, create a book object, and add to the library array

  document.getElementById(
    "displayAreaTitle"
  ).innerHTML = `${newBook.title}\n${newBook.author}\n${newBook.libraryID}`;
}
