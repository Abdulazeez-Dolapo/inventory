import Typography from "@material-ui/core/Typography"

const VendorInfo = props => {
	const { classes, product } = props

	return (
		<div>
			<Typography className={classes.title} variant="h6">
				Vendor Information
			</Typography>
			<Typography className={classes.subtitle}>
				<span className={classes.bold}>Vendor:</span> Vendor-
				{product?.vendor?.vendor}
			</Typography>
			<Typography className={classes.subtitle}>
				<span className={classes.bold}>Vendor Title:</span> Vendor-
				{product?.vendor?.title}
			</Typography>
			<Typography className={classes.subtitle}>
				<span className={classes.bold}>Vendor SKU:</span> SKU-
				{product?.vendor?.sku}
			</Typography>
			<Typography className={classes.subtitle}>
				<span className={classes.bold}>Backup Vendor:</span> Vendor-
				{product?.backupVendor?.vendor}
			</Typography>
			<Typography className={classes.subtitle}>
				<span className={classes.bold}>Backup Vendor Title:</span>{" "}
				{product?.backupVendor?.title}
			</Typography>
			<Typography className={classes.subtitle}>
				<span className={classes.bold}>Backup Vendor SKU:</span> SKU-
				{product?.backupVendor?.sku}
			</Typography>
			<Typography className={classes.subtitle}>
				<span className={classes.bold}>Vendor Order Unit:</span>{" "}
				{product?.vendorOrderUnit}
			</Typography>
			<Typography className={classes.subtitle}>
				<span className={classes.bold}>Vendor Case Pack:</span>{" "}
				{product?.vendorCasePack?.toLocaleString()}
			</Typography>{" "}
		</div>
	)
}

export default VendorInfo
