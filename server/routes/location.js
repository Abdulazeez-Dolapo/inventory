const express = require("express")

const { updateProductQuantity } = require("../controllers/location")

const locationRouter = express.Router()

locationRouter.patch("/location/:locationId", updateProductQuantity)

module.exports = locationRouter
