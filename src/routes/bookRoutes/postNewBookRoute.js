const { addNewBookHandler } = require("../../handlers/bookHandlers");

module.exports = {
	method: "POST",
	path: "/books",
	handler: addNewBookHandler,
};