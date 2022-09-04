const { getBookByIdHandler } = require("../../handlers/bookHandlers");

module.exports = {
	method: "GET",
	path: "/books/{id}",
	handler: getBookByIdHandler,
};