import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import productStyles from "../../styles/cards/product"

const useStyles = makeStyles(productStyles)

const Product = ({ product }) => {
	const classes = useStyles()
	const { internalTitle, coreNumber, moq, productUrl } = product

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					component="img"
					alt={internalTitle}
					height="140"
					image={productUrl}
					title={internalTitle}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{internalTitle}
					</Typography>

					<Typography
						className={classes.text}
						variant="body2"
						color="textSecondary"
					>
						Core Number:{" "}
						<span className={classes.bold}>{coreNumber}</span>
					</Typography>

					<Typography
						className={classes.text}
						variant="body2"
						color="textSecondary"
					>
						Minimum Order Quantity:{" "}
						<span className={classes.bold}>{moq}</span>
					</Typography>
				</CardContent>
			</CardActionArea>

			<CardActions>
				<Button
					size="medium"
					variant="contained"
					color="primary"
					className={classes.button}
				>
					Update Quantity
				</Button>
			</CardActions>
		</Card>
	)
}

export default Product
