import { Fragment, useState } from "react"
import { useHistory } from "react-router"

import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import QuantityUpdater from "../Modals/QuantityUpdater"

import productStyles from "../../styles/cards/product"
import { getTotalQuantity } from "../../utils"

const useStyles = makeStyles(productStyles)

const Product = props => {
	const classes = useStyles()
	const history = useHistory()

	const {
		product: { internalTitle, coreNumber, moq, productUrl, locations },
		handleUpdate,
		updateLoading,
	} = props

	const [open, setOpen] = useState(false)

	const handleClickOpen = e => {
		setOpen(true)
	}

	const routeToProduct = coreNumber => {
		history.push(`/product/${coreNumber}`)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<Fragment>
			<Card className={classes.root}>
				<CardActionArea onClick={e => routeToProduct(coreNumber)}>
					<CardMedia
						component="img"
						alt={internalTitle}
						height="140"
						image={productUrl}
						title={internalTitle}
					/>
					<CardContent>
						{internalTitle && (
							<Typography gutterBottom variant="h5" component="h2">
								{internalTitle}
							</Typography>
						)}

						{coreNumber && (
							<Typography
								className={classes.text}
								variant="body2"
								color="textSecondary"
							>
								Core Number:{" "}
								<span className={classes.bold}>{coreNumber}</span>
							</Typography>
						)}

						{moq && (
							<Typography
								className={classes.text}
								variant="body2"
								color="textSecondary"
							>
								Minimum Order Quantity:{" "}
								<span className={classes.bold}>
									{moq.toLocaleString()}
								</span>
							</Typography>
						)}

						{locations && (
							<Typography
								className={classes.text}
								variant="body2"
								color="textSecondary"
							>
								Total Available Quantity:{" "}
								<span className={classes.bold}>
									{getTotalQuantity(locations)?.toLocaleString()}
								</span>
							</Typography>
						)}
					</CardContent>
				</CardActionArea>

				<CardActions>
					<Button
						size="medium"
						variant="contained"
						color="primary"
						className={classes.button}
						onClick={handleClickOpen}
					>
						Update Quantity
					</Button>
				</CardActions>
			</Card>

			<QuantityUpdater
				open={open}
				handleClickOpen={handleClickOpen}
				handleClose={handleClose}
				locations={locations}
				coreNumber={coreNumber}
				handleUpdate={handleUpdate}
				loading={updateLoading}
			/>
		</Fragment>
	)
}

export default Product
