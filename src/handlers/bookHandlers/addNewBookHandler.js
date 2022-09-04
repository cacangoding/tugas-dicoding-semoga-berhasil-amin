const { CustomError } = require("../../utils/class");
const { nanoid } = require("nanoid");

const addNewBookHandler = (books) => {
	const { SystemError, UserRequestError } = CustomError;

	const addNewBook = (request, h) => {
		const {
			name, 
			year, 
			author, 
			sumary,
			publisher, 
			pageCount, 
			readPage,
			reading,
		} = request.payload;

		try {
			if (!name) throw new UserRequestError("Gagal menambahkan buku. Mohon isi nama buku");
			if (readPage > pageCount) 
				throw new UserRequestError("Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount");

			const id = nanoid(16);
			const now = new Date().toISOString();
			const isFinished = pageCount === readPage;
			const newBook = {
				id, 
				name, 
				year, 
				author, 
				summary,
				publisher, 
				pageCount, 
				readPage,
				finished: isFinished,
				reading,
				insertedAt: now,
				updatedAt: now
			};

			// Push newBook to book list
			books.push(newBook);

			const isSuccess = books.filter((book) => book.id === id).length > 0;
			if (!isSuccess) throw new SystemError("Buku gagal ditambahkan");

			const response = h.response({
				status: "success",
				message: "Buku berhasil ditambahkan",
				data: {
					bookId: id
				}
			});
			response.code(201);

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

	return addNewBook;
};

module.exports = addNewBookHandler;