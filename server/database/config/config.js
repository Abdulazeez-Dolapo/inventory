const dotenv = require("dotenv")

dotenv.config()

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST } = process.env

module.exports = {
	development: {
		username: DB_USER,
		password: DB_PASSWORD,
		database: DB_NAME,
		host: DB_HOST,
		dialect: "postgres",
	},
	production: {
		username: DB_USER,
		password: DB_PASSWORD,
		database: DB_NAME,
		host: DB_HOST,
		dialect: "postgres",
		use_env_variable: "DATABASE_URL",
		ssl: true,
		dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
	},
}
