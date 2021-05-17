const createError = require("http-errors")
const express = require("express")
const cors = require("cors")
const { join } = require("path")
const logger = require("morgan")

const appRoutes = require("./routes")

const { json, urlencoded } = express

const app = express()

app.use(logger("dev"))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(express.static(join(__dirname, "public")))

const corsOptions = {
	origin: process.env.FRONTEND_URL,
	methods: "GET,PUT,POST,DELETE,OPTIONS",
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.use("/api", appRoutes)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get("env") === "development" ? err : {}

	// render the error page
	res.status(err.status || 500)
	res.json({ error: err })
})

module.exports = app
