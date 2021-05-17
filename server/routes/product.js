const express = require("express")

const { getAllProducts } = require("../controllers/product")

const productRouter = express.Router()

productRouter.get("/products", getAllProducts)

module.exports = productRouter
