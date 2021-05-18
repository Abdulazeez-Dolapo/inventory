import { makeStyles } from "@material-ui/core/styles"

import Header from "./Header"

import appLayoutStyles from "../../styles/layout/appLayout"

const useStyles = makeStyles(appLayoutStyles)

const AppLayout = props => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Header />

			<div className={classes.page}>{props.children}</div>
		</div>
	)
}

export default AppLayout
