const { Location } = require("../database/models")

const updateLocation = async (where, data) => {
	return await Location.update(data, { where })
}

module.exports = { updateLocation }
