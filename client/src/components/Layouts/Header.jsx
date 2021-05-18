import { useHistory } from "react-router-dom"

import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import headerStyles from "../../styles/layout/header"

const useStyles = makeStyles(headerStyles)

const Header = () => {
	const classes = useStyles()

	const history = useHistory()

	const goToPage = route => {
		history.push(route)
	}

	return (
		<div className={classes.root}>
			<AppBar position="sticky">
				<Toolbar>
					<Grid container>
						<Grid item xs={12} sm={3}>
							<Typography
								onClick={e => goToPage("/")}
								variant="h6"
								className={classes.title}
							>
								Inventory Management System
							</Typography>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Header
