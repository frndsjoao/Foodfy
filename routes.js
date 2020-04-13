const express = require('express')
const users = require('./controllers/usersController')
//const admin = require('./controllers/adminController')

const routes = express.Router()


routes.get('/',users.home)
routes.get('/sobre', users.about)
routes.get('/receitas', users.recipes)
routes.get('/receitas/:index', users.showRecipe)

// routes.get('/admin', (req, res) => { 
//     return res.redirect('/admin/recipes')
// })
// routes.get('/admin/recipes', admin.index)
// routes.get('/admin/recipes/:id', admin.show)



module.exports = routes