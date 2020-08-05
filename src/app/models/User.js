const db = require('../../config/db')

module.exports = {
    mainPage(callback){
        db.query(`SELECT * FROM recipes LIMIT 6`, function(err, results){
            if(err) throw `Database error: ${err}`
            
            callback(results.rows)    
        })
    },

    recipePage(callback){
        db.query(`SELECT * FROM recipes`, function(err, results){
            if(err) throw `Database error: ${err}`

            callback(results.rows)
        })
    },

    show(id, callback){
        db.query(`SELECT * FROM recipes WHERE id = $1`, [id], function(err, results){
            if(err) throw `Database error: ${err}`

            callback(results.rows[0])
        })
    }
}