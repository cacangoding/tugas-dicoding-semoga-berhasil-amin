const { editBookHandler } = require("../../handlers/bookHandlers");

module.exports = {
	method: "PUT",
	path: "/books/{id}",
	handler: editBookHandler,
};