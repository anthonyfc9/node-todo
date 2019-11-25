const pgp = require("pg-promise")();

const db = pgp(
	process.env.DATABASE_URL
	|| "postgres://anthony:1946@localhost:5432/todo");


module.exports = db;