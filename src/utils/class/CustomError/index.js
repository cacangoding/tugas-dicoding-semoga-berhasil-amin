const NotFoundError = require("./NotFoundError");
const SystemError = require("./SystemError");
const UnauthorizedError = require("./UnauthorizedError");
const UserRequestError = require("./UserRequestError");

class CustomError {
	static NotFoundError = NotFoundError;
	static SystemError = SystemError;
	static UnauthorizedError = UnauthorizedError;
	static UserRequestError = UserRequestError;
}

module.exports = CustomError;
