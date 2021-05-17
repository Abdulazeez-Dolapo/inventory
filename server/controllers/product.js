const createError = require("http-errors")
const { fetchAllProducts } = require("../queries/product")

const getAllProducts = async (req, res, next) => {
	try {
		const products = await fetchAllProducts()

		return res.json({
			success: true,
			products,
		})
	} catch (error) {
		return next(createError(500))
	}
}

module.exports = { getAllProducts }
