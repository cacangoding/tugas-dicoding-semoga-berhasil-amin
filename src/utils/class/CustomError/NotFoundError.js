module.exports = class NotFoundError extends Error {
	HTTPErrorCode;

	constructor(message, HTTPErrorCode = 404) {
		super(message);
		this.HTTPErrorCode = HTTPErrorCode;
	}
};
