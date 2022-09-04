const bookHandlers = require("./bookHandlers");

const handlerList = [
	bookHandlers
];
  
const handlers = {};
  
handlerList.forEach((handler) => {
	Object.assign(handlers, handler);
});
  
module.exports = handlers;