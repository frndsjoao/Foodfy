const db = require('../../config/db')

module.exports = {
    all(callback){
        db.query(`SELECT * FROM chefs`, function(err, results){
            if(err) throw `Database error: ${err}`

            callback(results.rows)
        })
    },

    create(data, callback){
        const query = `INSERT INTO chefs(
            name,
            avatar_url,
            created_at
        ) VALUES ($1, $2, $3)
        RETURNING id`

        const values = [
            data.name,
            data.avatar_url,
            'NOW()'
        ]

        db.query(query, values, function(err, results){
            if(err) throw `Database error: ${err}`

            callback(results.rows[0])
        })
    },

    show_recipes(id, callback){
        db.query(`SELECT *
                    FROM recipes 
                    WHERE recipes.chef_id = $1`,
            [id], function(err, results){
                if(err) throw `Database error: ${err}`

                    callback(results.rows)
        })
    },

    show_chef(id, callback){
        db.query(`SELECT * FROM chefs WHERE id = $1`, [id], function(err, results){
            if(err) throw `Database error: ${err}`

            callback(results.rows[0])
        })
    },

    update(data, callback){
        const query = `UPDATE chefs SET
            name = ($1),
            avatar_url = ($2)
        WHERE id = $3`

        const values = [
            data.name,
            data.avatar_url,
            data.id
        ]

        db.query(query, values, function(err, results){
            if(err) throw `Database error: ${err}`

            callback()
        })
    },

    delete(id, callback){
        db.query(`DELETE FROM chefs WHERE id = $1`, [id], function(err, results){
            if(err) throw `Database error: ${err}`

            callback()
        })
    }


}