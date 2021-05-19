import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"

import Header from "./Header"

import appLayoutStyles from "../../styles/layout/appLayout"

const useStyles = makeStyles(appLayoutStyles)

const AppLayout = props => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Header />

			<Container maxWidth="lg" className={classes.page}>
				{props.children}
			</Container>
		</div>
	)
}

export default AppLayout
