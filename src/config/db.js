const { Pool } = require('pg')

module.exports = new Pool({
    user: 'fernandes',
    password: '',
    host: 'localhost',
    port: 5432,
    database: 'foodfy'
})