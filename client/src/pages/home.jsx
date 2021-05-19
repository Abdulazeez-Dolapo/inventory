import { useState, useEffect } from "react"
import { useHistory } from "react-router"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

import AppLayout from "../components/Layouts/AppLayout"
import Product from "../components/Cards/Product"
import ProductSkeleton from "../components/Loaders/ProductSkeleton"

import { fetchAllProducts, updateProductQuantity } from "../services/product"
import homeStyles from "../styles/pages/home"

const useStyles = makeStyles(homeStyles)

const Home = () => {
	const classes = useStyles()
	const history = useHistory()

	const [loading, setLoading] = useState(true)
	const [updateLoading, setUpdateLoading] = useState(false)
	const [products, setProducts] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		const getProducts = async () => {
			try {
				setLoading(true)
				const { products } = await fetchAllProducts()

				setProducts(products)
				setLoading(false)
				setError(false)
			} catch (error) {
				setLoading(false)
				setError(true)
			}
		}

		getProducts()
	}, [])

	const handleUpdate = async (locationId, data, coreNumber) => {
		try {
			setUpdateLoading(true)
			await updateProductQuantity(locationId, data)

			// Find the product whose location quantity was updated.
			const product = products.find(
				product => product.coreNumber === coreNumber
			)

			// Update quantity of updated location of said product
			product.locations = product?.locations.map(location => {
				if (location.id === locationId) {
					return { ...location, quantity: data?.newQuantity }
				}

				return location
			})

			// Replace updated product in list of all products.
			const newProducts = products.map(prod => {
				if (prod.coreNumber === coreNumber) {
					return product
				}

				return prod
			})

			setProducts(newProducts)
			setUpdateLoading(false)
			return Promise.resolve()
		} catch (error) {
			setUpdateLoading(false)
			return Promise.reject()
		}
	}

	const routeToProduct = coreNumber => {
		history.push(`/product/${coreNumber}`)
	}

	return (
		<AppLayout>
			<Grid container spacing={3}>
				{loading
					? [1, 2, 3, 4].map(num => (
							<Grid key={num} item xs={12} sm={4} md={3}>
								<ProductSkeleton />
							</Grid>
					  ))
					: error
					? "An error occured. Please try again later."
					: products?.length > 0
					? products.map(product => (
							<Grid
								item
								xs={12}
								sm={4}
								md={3}
								onClick={e => routeToProduct(product.coreNumber)}
								key={product.id}
							>
								<Product
									handleUpdate={handleUpdate}
									product={product}
									updateLoading={updateLoading}
								/>
							</Grid>
					  ))
					: "No products Found"}
			</Grid>
		</AppLayout>
	)
}

export default Home
