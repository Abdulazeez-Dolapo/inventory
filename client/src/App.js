import { BrowserRouter, Route, Switch } from "react-router-dom"

import { MuiThemeProvider } from "@material-ui/core"

import Home from "./pages/home"

import { theme } from "./styles/theme.js"
import "./App.css"

function App() {
	return (
		<MuiThemeProvider theme={theme}>
			<BrowserRouter>
				<Switch>
					<Route path="/" component={Home} />
				</Switch>
			</BrowserRouter>
		</MuiThemeProvider>
	)
}

export default App
