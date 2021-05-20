import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core"

import AppLayout from "../components/Layouts/AppLayout"
import ProductInfo from "../components/ProductDetails/ProductInfo"
import VendorInfo from "../components/ProductDetails/VendorInfo"
import LocationInfo from "../components/ProductDetails/LocationInfo"
import PackingInfo from "../components/ProductDetails/PackingInfo"
import TagInfo from "../components/ProductDetails/TagInfo"

import productStyles from "../styles/pages/product"
import { fetchSingleProduct } from "../services/product"
import { isObjectEmpty } from "../utils"

const useStyles = makeStyles(productStyles)

const Product = () => {
	const { coreNumber } = useParams()
	const classes = useStyles()

	const [loading, setLoading] = useState(true)
	const [product, setProduct] = useState({})

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				setLoading(true)

				const { product } = await fetchSingleProduct(coreNumber)
				setProduct(product)

				setLoading(false)
			} catch (error) {
				setLoading(false)
			}
		}

		fetchProduct()
	}, [])

	return (
		<AppLayout>
			<div className={classes.buttonContainer}>
				<Link to="/" className={classes.link}>
					<Button variant="outlined" color="primary">
						Go Back
					</Button>
				</Link>
			</div>

			<Paper variant="outlined" className={classes.containerPaper}>
				{loading ? (
					"Loading"
				) : !isObjectEmpty(product) ? (
					<Grid container className={classes.root}>
						<Grid item xs={12} sm={4} className={classes.imageContainer}>
							<img
								src={product?.productUrl}
								alt={product.coreNumber}
								className={classes.image}
							/>
						</Grid>

						<Grid item xs={12} sm={4} className={classes.grid}>
							<ProductInfo classes={classes} product={product} />
						</Grid>

						<Grid item xs={12} sm={4} className={classes.grid}>
							<VendorInfo classes={classes} product={product} />
						</Grid>

						<Grid item xs={12} sm={4} className={classes.grid}>
							<LocationInfo classes={classes} product={product} />
						</Grid>

						<Grid item xs={12} sm={4} className={classes.grid}>
							<PackingInfo classes={classes} product={product} />
						</Grid>

						<Grid item xs={12} sm={4} className={classes.grid}>
							<TagInfo classes={classes} product={product} />
						</Grid>
					</Grid>
				) : (
					"Product Not Found"
				)}
			</Paper>
		</AppLayout>
	)
}

export default Product
