const express = require("express")

const { getAllProducts, getProduct } = require("../controllers/product")

const productRouter = express.Router()

productRouter.get("/products", getAllProducts)
productRouter.get("/product/:coreNumber", getProduct)

module.exports = productRouter
