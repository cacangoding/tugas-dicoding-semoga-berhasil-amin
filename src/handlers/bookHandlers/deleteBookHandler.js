const { CustomError } = require("../../utils/class");

const deleteBookHandler = (books) => {
	const { NotFoundError } = CustomError;

	const deleteBook = (request, h) => {
		const { id } = request.params;

		try {
			const index = books.findIndex((book) => book.id === id);
			if (index === -1) throw new NotFoundError("Buku gagal dihapus. Id tidak ditemukan");
    
			books.splice(index, 1);
			const response = h.response({
				status: "success",
				message: "Buku berhasil dihapus",
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

	return deleteBook;
};

module.exports = deleteBookHandler;