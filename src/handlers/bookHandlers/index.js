const books = require("../../utils/data/books");

const addNewBookHandler = require("./addNewBookHandler");
const getBookListHandler = require("./getBookListHandler");
const getBookByIdHandler = require("./getBookByIdHandler");
const editBookHandler = require("./editBookHandler");
const deleteBookHandler = require("./deleteBookHandler");

const bookHandlers = {
	addNewBookHandler: addNewBookHandler(books),
	getBookListHandler: getBookListHandler(books),
	getBookByIdHandler: getBookByIdHandler(books),
	editBookHandler: editBookHandler(books),
	deleteBookHandler: deleteBookHandler(books),
};

module.exports = bookHandlers;