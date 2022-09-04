const getBookListHandler = (books) => {
	const getBookList = (request, h) => {
		const {
			name = null,
			reading = null,
			finished = null,
		} = request.query;

		try {
			const booksData = books.filter((book) => {
				let val = true;
				let pattern = new RegExp(`${name}`, "gi");
				if (typeof reading === "string") {
					val = book.reading === Boolean(Number(reading));
				}

				if (typeof finished === "string") {
					val = book.finished === Boolean(Number(finished));
				}

				if (name !== null) {
					val = pattern.test(book.name);
				}

				return val;
			});

			const response = h.response({
				status: "success",
				data: {
					books: booksData.map((book) => {
						return {
							id: book.id,
							name: book.name,
							publisher: book.publisher
						};
					})
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

	return getBookList;
};

module.exports = getBookListHandler;