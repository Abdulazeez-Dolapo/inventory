import { useState, useEffect } from "react"

import { makeStyles } from "@material-ui/core/styles"

import AppLayout from "../components/Layouts/AppLayout"
import Product from "../components/Cards/Product"
import ProductSkeleton from "../components/Loaders/ProductSkeleton"

import { fetchAllProducts } from "../services/product"
import homeStyles from "../styles/pages/home"
import { Container, Grid } from "@material-ui/core"

const useStyles = makeStyles(homeStyles)

const Home = () => {
	const classes = useStyles()

	const [loading, setLoading] = useState(false)
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
				console.log(error)
			}
		}

		getProducts()
	}, [])

	return (
		<AppLayout>
			<Container maxWidth="lg">
				<Grid container spacing={3}>
					{loading
						? [1, 2, 3, 4].map(num => (
								<Grid key={num} item xs={12} sm={4} md={3}>
									<ProductSkeleton />
								</Grid>
						  ))
						: error
						? ""
						: products?.length > 0
						? products.map(product => (
								<Grid item xs={12} sm={4} md={3} key={product.id}>
									<Product product={product} />
								</Grid>
						  ))
						: ""}
				</Grid>
			</Container>
		</AppLayout>
	)
}

export default Home
