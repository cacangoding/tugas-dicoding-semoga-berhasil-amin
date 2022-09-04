module.exports = class UnauthorizedError extends Error {
	HTTPErrorCode;

	constructor(message, HTTPErrorCode = 401) {
		super(message);
		this.HTTPErrorCode = HTTPErrorCode;
	}
};
