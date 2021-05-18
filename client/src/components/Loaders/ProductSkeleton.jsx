import { Fragment } from "react"

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Skeleton from "@material-ui/lab/Skeleton"
import { makeStyles } from "@material-ui/core/styles"

import productSkeletonStyles from "../../styles/loaders/productSkeleton"

const useStyles = makeStyles(productSkeletonStyles)

const ProductSkeleton = () => {
	const classes = useStyles()

	return (
		<Card className={classes.card}>
			<Skeleton animation="wave" variant="rect" height={200} />

			<CardContent>
				<Fragment>
					<Skeleton
						animation="wave"
						height={20}
						className={classes.title}
					/>
					<Skeleton animation="wave" height={15} width="80%" />
				</Fragment>
			</CardContent>
		</Card>
	)
}

export default ProductSkeleton
