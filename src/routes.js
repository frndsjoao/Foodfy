const express = require('express')
const users = require('./app/controllers/usersController')
const admin = require('./app/controllers/adminController')

const routes = express.Router()


routes.get('/',users.home)
routes.get('/sobre', users.about)
routes.get('/receitas', users.recipes)
routes.get('/receitas/:id', users.showRecipe)
routes.get('/chefs', users.chefs)


routes.get('/admin', (req, res) => { return res.redirect('/admin/recipes') })
routes.get('/admin/recipes', admin.index)
routes.get('/admin/recipes/create', admin.create)
routes.get('/admin/recipes/:id', admin.show)
routes.get('/admin/recipes/:id/edit', admin.edit)

routes.post('/admin/recipes', admin.post)
routes.put('/admin/recipes', admin.put)
routes.delete('/admin/recipes', admin.delete)


routes.get('/admin/chefs', admin.chefIndex)
routes.get('/admin/chefs/create', admin.chefCreate)
routes.get('/admin/chefs/:id', admin.chefShow)
routes.get('/admin/chefs/:id/edit', admin.chefEdit)

routes.post('/admin/chefs', admin.chefPost)
routes.put('/admin/chefs', admin.chefPut)
routes.delete('/admin/chefs', admin.chefDelete)

module.exports = routes