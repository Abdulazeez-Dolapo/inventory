import Typography from "@material-ui/core/Typography"

const ProductInfo = props => {
	const { classes, product } = props

	return (
		<div>
			<Typography className={classes.title} variant="h6">
				Product Information
			</Typography>

			<Typography className={classes.subtitle}>
				<span className={classes.bold}>Core Number: </span>
				{product?.coreNumber}
			</Typography>

			<Typography className={classes.subtitle}>
				<span className={classes.bold}>Internal Title: </span>
				{product?.internalTitle}
			</Typography>

			<Typography className={classes.subtitle}>
				<span className={classes.bold}>Active status: </span>
				{product?.active ? "Yes" : "No"}
			</Typography>

			<Typography className={classes.subtitle}>
				<span className={classes.bold}>Hazmat: </span>
				{product?.hazmat ? "Yes" : "No"}
			</Typography>

			<Typography className={classes.subtitle}>
				<span className={classes.bold}>Ignore Until: </span>
				{new Date(product?.ignoreUntil).toDateString()}
			</Typography>

			<Typography className={classes.subtitle}>
				<span className={classes.bold}>MOQ: </span>
				{product?.moq?.toLocaleString()}
			</Typography>

			<Typography className={classes.subtitle}>
				<span className={classes.bold}>Restockable: </span>
				{product?.restockable ? "Yes" : "No"}
			</Typography>

			<Typography className={classes.subtitle}>
				<span className={classes.bold}>Buffer Days: </span>
				{product?.bufferDays}
			</Typography>

			<Typography className={classes.subtitle}>
				<span className={classes.bold}>Minimum Level: </span>
				{product?.minLevel}
			</Typography>
		</div>
	)
}

export default ProductInfo
