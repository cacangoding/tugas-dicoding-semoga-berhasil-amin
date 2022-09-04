const postNewBookRoute = require("./postNewBookRoute");
const getBookListRoute = require("./getBookListRoute");
const getBookByIdRoute = require("./getBookByIdRoute");
const putBookRoute = require("./putBookRoute");
const deleteBookRoute = require("./deleteBookRoute");

module.exports = [
	postNewBookRoute,
	getBookListRoute,
	getBookByIdRoute,
	putBookRoute,
	deleteBookRoute
];