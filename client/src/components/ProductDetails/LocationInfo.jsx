import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"

import { getTotalQuantity } from "../../utils"

const LocationInfo = props => {
	const { classes, product } = props

	return (
		<div>
			<Typography className={classes.title} variant="h6">
				Warehouse Locations with Quantities
			</Typography>

			<List dense className={classes.list}>
				<ListItem disableGutters>
					<ListItemText
						classes={{ primary: classes.listItemText }}
						primary="Location"
					/>

					<ListItemSecondaryAction>Quantity</ListItemSecondaryAction>
				</ListItem>

				{product?.locations.map(location => (
					<ListItem disableGutters key={location?.id}>
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
						{getTotalQuantity(product?.locations).toLocaleString()}
					</ListItemSecondaryAction>
				</ListItem>
			</List>
		</div>
	)
}

export default LocationInfo
