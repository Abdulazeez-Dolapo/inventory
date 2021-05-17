const { Product } = require("../database/models")

const fetchAllProducts = async (include = []) => {
	const query = { include }

	if (include === "all") {
		query.include = [
			"vendor",
			"backupVendor",
			"packing",
			"tag",
			"locations",
			"notes",
		]
	}

	return await Product.findAll(query)
}

const fetchProduct = async (where = {}, include = []) => {
	const query = { where, include }

	if (include === "all") {
		query.include = [
			"vendor",
			"backupVendor",
			"packing",
			"tag",
			"locations",
			"notes",
		]
	}

	return await Product.findOne(query)
}

module.exports = { fetchAllProducts, fetchProduct }
