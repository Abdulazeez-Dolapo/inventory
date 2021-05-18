import { Fragment, useState } from "react"

import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Grid from "@material-ui/core/Grid"
import MenuItem from "@material-ui/core/MenuItem"
import CircularProgress from "@material-ui/core/CircularProgress"
import { makeStyles } from "@material-ui/core"

import quantityUpdaterStyles from "../../styles/quantityUpdater"

const useStyles = makeStyles(quantityUpdaterStyles)

const QuantityUpdater = props => {
	const classes = useStyles()
	const { open, handleClose, locations, coreNumber, handleUpdate, loading } =
		props

	const [formInfo, setFormInfo] = useState({
		location: (locations && locations[0]?.id) || 1,
		quantity: 1,
		operation: "add",
	})

	const operations = [
		{ name: "Add to", value: "add" },
		{ name: "Remove from", value: "minus" },
	]
	const handleChange = e => {
		const { name, value } = e.target
		setFormInfo({ ...formInfo, [name]: value })
	}
	const handleSubmit = e => {
		e.preventDefault()
		const location = locations.find(
			location => location.id === formInfo.location
		)

		let newQuantity = location?.quantity
		if (formInfo.operation === "add") {
			newQuantity = location?.quantity + parseInt(formInfo.quantity)
		}
		if (formInfo.operation === "minus") {
			newQuantity = location?.quantity - parseInt(formInfo.quantity)
		}

		handleUpdate(formInfo.location, { newQuantity }, coreNumber)
	}

	return (
		<div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
				{loading ? (
					<div className={classes.loader}>
						<CircularProgress />
					</div>
				) : (
					<Fragment>
						<DialogTitle id="form-dialog-title">
							Update Quantity of {coreNumber}
						</DialogTitle>

						<form onSubmit={handleSubmit}>
							<DialogContent className={classes.dialogContent}>
								<DialogContentText>
									Select the location you want to update and input the
									quantity to add or subtract from that location.
								</DialogContentText>

								<Grid container spacing={3}>
									<Grid item xs={12} sm={6}>
										<TextField
											size="small"
											label="Location"
											select
											value={formInfo.location}
											name="location"
											onChange={handleChange}
											variant="outlined"
											fullWidth
										>
											{locations.map(location => (
												<MenuItem
													key={location.id}
													value={location.id}
												>
													{location.location}
												</MenuItem>
											))}
										</TextField>
									</Grid>

									<Grid item xs={12} sm={6}>
										<TextField
											size="small"
											select
											value={formInfo.operation}
											name="operation"
											onChange={handleChange}
											variant="outlined"
											label="Operation"
											fullWidth
										>
											{operations.map(operation => (
												<MenuItem
													key={operation.value}
													value={operation.value}
												>
													{operation.name}
												</MenuItem>
											))}
										</TextField>
									</Grid>

									<Grid item xs={12}>
										<TextField
											autoFocus
											size="small"
											id="quantity"
											name="quantity"
											label="Quantity"
											type="number"
											variant="outlined"
											value={formInfo.quantity}
											onChange={handleChange}
											fullWidth
										/>
									</Grid>
								</Grid>
							</DialogContent>

							<DialogActions>
								<Button onClick={handleClose} color="primary">
									Cancel
								</Button>

								<Button
									type="submit"
									variant="contained"
									color="primary"
								>
									Update
								</Button>
							</DialogActions>
						</form>
					</Fragment>
				)}
			</Dialog>
		</div>
	)
}

export default QuantityUpdater
