import { BrowserRouter, Route, Switch } from "react-router-dom"

import { MuiThemeProvider } from "@material-ui/core"

import Home from "./pages/home"
import Product from "./pages/product"

import { theme } from "./styles/theme"
import "./App.css"

function App() {
	return (
		<MuiThemeProvider theme={theme}>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/product/:coreNumber" exact component={Product} />
				</Switch>
			</BrowserRouter>
		</MuiThemeProvider>
	)
}

export default App
