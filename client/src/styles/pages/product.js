const productStyles = theme => ({
	root: {
		width: "100%",
		height: "100%",
	},
	buttonContainer: { paddingBottom: "0.5rem" },
	link: { textDecoration: "none" },
	containerPaper: {
		height: "100%",
		padding: "1rem",
	},
	imageContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		paddingBottom: "2rem",
	},
	image: {
		height: 200,
		width: "90%",
	},
	list: { paddingTop: 0 },
	title: {
		textAlign: "center",
		fontWeight: 600,
		paddingBottom: "0.7rem",
	},
	subtitle: { display: "block", fontSize: "1rem", lineHeight: 2 },
	bold: { fontWeight: 600 },
	listItemText: { fontSize: "0.9rem", fontWeight: 600 },
	noteText: { fontSize: "0.9rem", paddingLeft: 0 },
	grid: {
		padding: "2rem",
		[theme.breakpoints.only("xs")]: {
			padding: 0,
			paddingBottom: "2rem",
		},
	},
})

export default productStyles
