import Typography from "@material-ui/core/Typography"

const TagInfo = props => {
	const { classes, product } = props

	return (
		<div>
			<Typography className={classes.title} variant="h6">
				Tags
			</Typography>

			<Typography className={classes.subtitle}>
				<span className={classes.bold}>Tag One: </span>
				{product?.tag?.tagOne}
			</Typography>

			<Typography className={classes.subtitle}>
				<span className={classes.bold}>Tag Two: </span>
				{product?.tag?.tagTwo}
			</Typography>

			<Typography className={classes.subtitle}>
				<span className={classes.bold}>Tag Three: </span>
				{product?.tag?.tagThree}
			</Typography>

			<Typography className={classes.subtitle}>
				<span className={classes.bold}>Tag Four: </span>
				{product?.tag?.tagFour}
			</Typography>
		</div>
	)
}

export default TagInfo
