module.exports = class UserRequestError extends Error {
	HTTPErrorCode;

	constructor(message, HTTPErrorCode = 400) {
		super(message);
		this.HTTPErrorCode = HTTPErrorCode;
	}
};
