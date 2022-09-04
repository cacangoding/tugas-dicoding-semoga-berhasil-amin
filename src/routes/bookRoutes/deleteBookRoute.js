const { deleteBookHandler } = require("../../handlers/bookHandlers");

module.exports = {
	method: "DELETE",
	path: "/books/{id}",
	handler: deleteBookHandler,
};