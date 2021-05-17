const express = require("express")

const productRoutes = require("./product")

const router = express.Router()

router.use("/", productRoutes)

module.exports = router
