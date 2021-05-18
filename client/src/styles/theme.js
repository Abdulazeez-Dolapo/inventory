import { createMuiTheme } from "@material-ui/core"

export const theme = createMuiTheme({
	typography: {
		fontFamily: "roboto, sans-serif",
		fontSize: 12,
	},
	palette: {
		primary: {
			main: "#3A8DFF",
			btn: "#b0b0b0",
			btnBackground: "#ffffff",
			shadow: "rgba(74,106,149,0.2)",
			label: "rgb(0,0,0,0.4)",
		},
		secondary: {
			main: "#A3B3CB",
			bgColor: "#E8EEF8",
		},
	},
})
