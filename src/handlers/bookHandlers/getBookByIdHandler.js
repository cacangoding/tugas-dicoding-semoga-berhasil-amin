const { CustomError } = require("../../utils/class");

const getBookByIdHandler = (books) => {
	const { NotFoundError } = CustomError;

	const getBookById = (request, h) => {
		const { id } = request.params;
		
		try {
			const book = books.filter((book) => book.id === id)[0];

			if (!book) throw new NotFoundError("Buku tidak ditemukan");

			const response = h.response({
				status: "success",
				data: {
					book
				}
			});
			response.code(200);

			return response;
		} catch (error) {
			const response = h.response({
				status: "fail",
				message: error.message || "An error has occured",
			});
			response.code(error.HTTPErrorCode);

			return response;
		}
	};

	return getBookById;
};

module.exports = getBookByIdHandler;