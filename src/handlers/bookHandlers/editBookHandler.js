const { CustomError } = require("../../utils/class");

const editBookBookHandler = (books) => {
	const { UserRequestError, NotFoundError } = CustomError;

	const editBookBook = (request, h) => {
		const {
			name, 
			year, 
			author, 
			summary,
			publisher, 
			pageCount, 
			readPage,
			reading,
		} = request.payload;
		const { id } = request.params;

		try {
			const index = books.findIndex((book) => book.id === id);
            
			if (index === -1) throw new NotFoundError("Gagal memperbarui buku. Id tidak ditemukan");
			if (!name) throw new UserRequestError("Gagal memperbarui buku. Mohon isi nama buku");
			if (readPage > pageCount) 
				throw new UserRequestError("Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount");
            
			// Update book details
			const now = new Date().toISOString();
			books[index] = {
				...books[index],
				name, 
				year, 
				author, 
				sumary,
				publisher, 
				pageCount, 
				readPage,
				reading,
				updatedAt: now
			};
            
			const response = h.response({
				status: "success",
				message: "Buku berhasil diperbarui"
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

	return editBookBook;
};

module.exports = editBookBookHandler;