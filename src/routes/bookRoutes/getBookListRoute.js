const { getBookListHandler } = require("../../handlers/bookHandlers");

module.exports = {
	method: "GET",
	path: "/books",
	handler: getBookListHandler,
};