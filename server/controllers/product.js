const createError = require("http-errors")
const { fetchAllProducts, fetchProduct } = require("../queries/product")

const getAllProducts = async (req, res, next) => {
	try {
		const products = await fetchAllProducts(["locations"])

		return res.json({
			success: true,
			products,
		})
	} catch (error) {
		return next(createError(500))
	}
}

const getProduct = async (req, res, next) => {
	try {
		const { coreNumber } = req.params
		const product = await fetchProduct({ coreNumber }, "all")

		return res.json({
			success: true,
			product,
		})
	} catch (error) {
		return next(createError(500))
	}
}

module.exports = { getAllProducts, getProduct }
