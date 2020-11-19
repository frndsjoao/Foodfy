const { Pool } = require('pg')

module.exports = new Pool({
    database : "foodfy",
    user : "fernandes",
    password: "",
    host : "localhost",
    port: 5432
})