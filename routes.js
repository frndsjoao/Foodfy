const express = require('express')
const mainController = require('./controllers/mainController')
const recipesController = require('./controllers/recipesController')


const routes = express.Router()


routes.get('/',mainController.index)
routes.get('/sobre', mainController.about)
routes.get('/receitas', mainController.recipes)
routes.get('/receitas/:index', mainController.sigleRecipe)

routes.get('/admin', (req, res) => { 
    return res.redirect('/admin/recipes')
})
routes.get('/admin/recipes', recipesController.index)
// routes.post('/admin/recipes', recipesController.post)
// routes.put('/admin/recipes', recipesController.put)
// routes.delete('/admin/recipes', recipesController.delete)

// routes.get('/admin/recipes/create', recipesController.create)
// routes.get('/admin/recipes/:id', recipesController.show)
// routes.get('/admin/recipes/:id/edit', recipesController.edit)


module.exports = routes