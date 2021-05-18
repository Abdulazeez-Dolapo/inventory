const createError = require("http-errors")
const { updateLocation } = require("../queries/location")

// I would normally use a validation library like "Joi" with better validation handler
const validateInput = input => {
	if (!input) {
		return "Please enter a valid quantity"
	}

	if (typeof input !== "number") {
		return "Quantity must be a number"
	}

	if (input < 0) {
		return "Quantity must not be negative number"
	}
}

const updateProductQuantity = async (req, res, next) => {
	try {
		const { newQuantity } = req.body
		const { locationId } = req.params

		const errorMessage = validateInput(newQuantity)
		if (errorMessage) {
			return next(createError(400, errorMessage))
		}

		const updatedLocation = await updateLocation(
			{ id: locationId },
			{ quantity: newQuantity }
		)

		return res.json({
			success: true,
			updatedLocation,
		})
	} catch (error) {
		return next(createError(500))
	}
}

module.exports = { updateProductQuantity }
