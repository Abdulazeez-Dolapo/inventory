const { Product } = require("../database/models")

const fetchAllProducts = async (include = []) => {
	return await Product.findAll({ include })
}

module.exports = { fetchAllProducts }
