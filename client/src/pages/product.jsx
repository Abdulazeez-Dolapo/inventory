import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import { makeStyles } from "@material-ui/core"

import AppLayout from "../components/Layouts/AppLayout"

import { fetchSingleProduct } from "../services/product"
import { getTotalQuantity, isObjectEmpty } from "../utils"
import productStyles from "../styles/pages/product"

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
			<Paper variant="outlined" className={classes.containerPaper}>
				{!isObjectEmpty(product) ? (
					<Grid container className={classes.root}>
						<Grid item xs={12} sm={4} className={classes.imageContainer}>
							<img
								src={product?.productUrl}
								alt={product.coreNumber}
								className={classes.image}
							/>
						</Grid>

						<Grid item xs={12} sm={4} className={classes.grid}>
							<Typography className={classes.title} variant="h6">
								Product Information
							</Typography>

							<Typography variant="p" className={classes.subtitle}>
								<span className={classes.bold}>Core Number: </span>
								{product?.coreNumber}
							</Typography>

							<Typography variant="p" className={classes.subtitle}>
								<span className={classes.bold}>Internal Title: </span>
								{product?.internalTitle}
							</Typography>

							<Typography variant="p" className={classes.subtitle}>
								<span className={classes.bold}>Active status: </span>
								{product?.active ? "Yes" : "No"}
							</Typography>

							<Typography variant="p" className={classes.subtitle}>
								<span className={classes.bold}>Hazmat: </span>
								{product?.hazmat ? "Yes" : "No"}
							</Typography>

							<Typography variant="p" className={classes.subtitle}>
								<span className={classes.bold}>Ignore Until: </span>
								{new Date(product?.ignoreUntil).toDateString()}
							</Typography>

							<Typography variant="p" className={classes.subtitle}>
								<span className={classes.bold}>MOQ: </span>
								{product?.moq?.toLocaleString()}
							</Typography>

							<Typography variant="p" className={classes.subtitle}>
								<span className={classes.bold}>Restockable: </span>
								{product?.restockable ? "Yes" : "No"}
							</Typography>

							<Typography variant="p" className={classes.subtitle}>
								<span className={classes.bold}>Buffer Days: </span>
								{product?.bufferDays}
							</Typography>

							<Typography variant="p" className={classes.subtitle}>
								<span className={classes.bold}>Minimum Level: </span>
								{product?.minLevel}
							</Typography>
						</Grid>

						<Grid item xs={12} sm={4} className={classes.grid}>
							<Typography className={classes.title} variant="h6">
								Vendor Information
							</Typography>

							<Typography variant="p" className={classes.subtitle}>
								<span className={classes.bold}>Vendor:</span> Vendor-
								{product?.vendor?.vendor}
							</Typography>

							<Typography variant="p" className={classes.subtitle}>
								<span className={classes.bold}>Vendor Title:</span>{" "}
								Vendor-
								{product?.vendor?.title}
							</Typography>

							<Typography variant="p" className={classes.subtitle}>
								<span className={classes.bold}>Vendor SKU:</span> SKU-
								{product?.vendor?.sku}
							</Typography>

							<Typography variant="p" className={classes.subtitle}>
								<span className={classes.bold}>Backup Vendor:</span>{" "}
								Vendor-
								{product?.backupVendor?.vendor}
							</Typography>

							<Typography variant="p" className={classes.subtitle}>
								<span className={classes.bold}>
									Backup Vendor Title:
								</span>{" "}
								{product?.backupVendor?.title}
							</Typography>

							<Typography variant="p" className={classes.subtitle}>
								<span className={classes.bold}>Backup Vendor SKU:</span>{" "}
								SKU-
								{product?.backupVendor?.sku}
							</Typography>

							<Typography variant="p" className={classes.subtitle}>
								<span className={classes.bold}>Vendor Order Unit:</span>{" "}
								{product?.vendorOrderUnit}
							</Typography>

							<Typography variant="p" className={classes.subtitle}>
								<span className={classes.bold}>Vendor Case Pack:</span>{" "}
								{product?.vendorCasePack?.toLocaleString()}
							</Typography>
						</Grid>

						<Grid item xs={12} sm={4} className={classes.grid}>
							<Typography className={classes.title} variant="h6">
								Warehouse Locations with Quantities
							</Typography>

							<List dense className={classes.list}>
								<ListItem disableGutters>
									<ListItemText
										classes={{ primary: classes.listItemText }}
										primary="Location"
									/>

									<ListItemSecondaryAction>
										Quantity
									</ListItemSecondaryAction>
								</ListItem>

								{product?.locations.map(location => (
									<ListItem disableGutters>
										<ListItemText
											classes={{ primary: classes.listItemText }}
											primary={location?.location}
										/>

										<ListItemSecondaryAction>
											{location?.quantity?.toLocaleString()}
										</ListItemSecondaryAction>
									</ListItem>
								))}

								<ListItem disableGutters>
									<ListItemText
										classes={{ primary: classes.listItemText }}
										primary="Total Quantity"
									/>

									<ListItemSecondaryAction>
										{getTotalQuantity(
											product?.locations
										).toLocaleString()}
									</ListItemSecondaryAction>
								</ListItem>
							</List>
						</Grid>

						<Grid item xs={12} sm={4} className={classes.grid}>
							<Typography className={classes.title} variant="h6">
								Notes and Packing Information
							</Typography>

							<Typography variant="p" className={classes.subtitle}>
								<span className={classes.bold}>Boxes per Case: </span>
								{product?.packing?.boxesPerCase?.toLocaleString()}
							</Typography>

							<Typography variant="p" className={classes.subtitle}>
								<span className={classes.bold}>
									Case Pack (Pieces):{" "}
								</span>
								{product?.packing?.casePack}
							</Typography>

							<Typography variant="p" className={classes.subtitle}>
								<span className={classes.bold}>
									Pieces per Internal Box:{" "}
								</span>
								{product?.packing?.piecesPerInternalBox}
							</Typography>

							<Typography variant="p" className={classes.subtitle}>
								<span className={classes.bold}>
									Note for Next order:{" "}
								</span>
								{product?.nextOrderNote}
							</Typography>

							<Typography variant="p" className={classes.subtitle}>
								<span className={classes.bold}>Other Notes: </span>

								<List dense className={classes.list}>
									{product?.notes.map(note => (
										<ListItem disableGutters>
											<ListItemText
												classes={{ primary: classes.noteText }}
												primary={note?.content}
											/>
										</ListItem>
									))}
								</List>
							</Typography>
						</Grid>

						<Grid item xs={12} sm={4} className={classes.grid}>
							<Typography className={classes.title} variant="h6">
								Tags
							</Typography>

							<Typography variant="p" className={classes.subtitle}>
								<span className={classes.bold}>Tag One: </span>
								{product?.tag?.tagOne}
							</Typography>

							<Typography variant="p" className={classes.subtitle}>
								<span className={classes.bold}>Tag Two: </span>
								{product?.tag?.tagTwo}
							</Typography>

							<Typography variant="p" className={classes.subtitle}>
								<span className={classes.bold}>Tag Three: </span>
								{product?.tag?.tagThree}
							</Typography>

							<Typography variant="p" className={classes.subtitle}>
								<span className={classes.bold}>Tag Four: </span>
								{product?.tag?.tagFour}
							</Typography>
						</Grid>
					</Grid>
				) : (
					""
				)}
			</Paper>
		</AppLayout>
	)
}

export default Product
