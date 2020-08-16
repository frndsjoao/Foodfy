const db = require('../../config/db')

module.exports = {
    mainPage(callback){
        db.query(`SELECT recipes.*, chefs.name AS author
                FROM recipes
                LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
                LIMIT 6`, function(err, results){
            if(err) throw `Database error: ${err}`
            
            callback(results.rows)    
        })
    },

    recipePage(callback){
        db.query(`SELECT recipes.*, chefs.name AS author
                FROM recipes
                LEFT JOIN chefs ON (recipes.chef_id = chefs.id)`, function(err, results){
            if(err) throw `Database error: ${err}`

            callback(results.rows)
        })
    },

    showRecipe(id, callback){
        db.query(`SELECT recipes.*, chefs.name AS author
                FROM recipes
                LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
                WHERE recipes.id = $1`, [id], function(err, results){
            if(err) throw `Database error: ${err}`

            callback(results.rows[0])
        })
    },
    
    chefPage(callback){
        db.query(`SELECT chefs.*, count(recipes) AS total_recipes
                    FROM chefs
                    LEFT JOIN recipes ON (recipes.chef_id = chefs.id)
                    GROUP BY chefs.id ORDER BY total_recipes DESC`, function(err, results){
            if (err) throw `Database error ${err}`

            callback(results.rows)
        })
    },

    findBy(filter, callback){
        db.query(`SELECT recipes.*, chefs.name AS author
                FROM recipes
                LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
                WHERE recipes.title ILIKE '%${filter}%'`, function(err, results){
            if(err) throw `Database error: ${err}`

            callback(results.rows)
        })
    }
}