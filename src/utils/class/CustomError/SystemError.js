module.exports = class SystemError extends Error {
	HTTPErrorCode;

	constructor(message, HTTPErrorCode = 500) {
		super(message);
		this.HTTPErrorCode = HTTPErrorCode;
	}
};
