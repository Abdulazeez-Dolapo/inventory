const express = require("express")

const productRoutes = require("./product")
const locationRoutes = require("./location")

const router = express.Router()

router.use("/", productRoutes)
router.use("/", locationRoutes)

module.exports = router
