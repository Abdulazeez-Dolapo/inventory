import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

const PackingInfo = props => {
	const { classes, product } = props

	return (
		<div>
			<Typography className={classes.title} variant="h6">
				Notes and Packing Information
			</Typography>

			<Typography className={classes.subtitle}>
				<span className={classes.bold}>Boxes per Case: </span>
				{product?.packing?.boxesPerCase?.toLocaleString()}
			</Typography>

			<Typography className={classes.subtitle}>
				<span className={classes.bold}>Case Pack (Pieces): </span>
				{product?.packing?.casePack}
			</Typography>

			<Typography className={classes.subtitle}>
				<span className={classes.bold}>Pieces per Internal Box: </span>
				{product?.packing?.piecesPerInternalBox}
			</Typography>

			<Typography className={classes.subtitle}>
				<span className={classes.bold}>Note for Next order: </span>
				{product?.nextOrderNote}
			</Typography>

			<Typography className={classes.subtitle}>
				<span className={classes.bold}>Other Notes: </span>
			</Typography>

			<List dense className={classes.list}>
				{product?.notes.map(note => (
					<ListItem key={note?.id} disableGutters>
						<ListItemText
							classes={{ primary: classes.noteText }}
							primary={note?.content}
						/>
					</ListItem>
				))}
			</List>
		</div>
	)
}

export default PackingInfo
