const db = require('../../config/db')
const Admin = require('../models/Admin')
const Chef = require('../models/Chef')

module.exports = {
    index(req, res){
        Admin.all(function(recipes){
            return res.render('admin/recipes/index', { recipes: recipes })
        })
    },

    show(req, res){
        Admin.showRecipe(req.params.id, function(recipe){
            if(!recipe) return res.send(`Recipe not found!`)

            return res.render('admin/recipes/show', { recipe })
        })
    },

    create(req, res){
        return res.render('admin/recipes/create')
    },

    post(req, res){
        const keys = Object.keys(req.body)
        for(key of keys){
            if(req.body[key] == ""){
                res.send(`Please fill all the blank fields!`)
            }
        }
        Admin.createRecipe(req.body, function(recipe){
            return res.redirect(`/admin/recipes/${recipe.id}`)
        })
    },

    edit(req, res){
        Admin.showRecipe(req.params.id, function(recipe){
            if(!recipe) return res.send(`Recipe not found!`)

            return res.render('admin/recipes/edit', { recipe })
        })
    },

    put(req, res){
        const keys = Object.keys(req.body)
        for(key of keys){
            if(req.body[key] == ""){
                res.send(`Please fill all the blank fields!`)
            }
        }
        Admin.update(req.body, function(recipe){
            return res.redirect(`/admin/recipes/${req.body.id}`)
        })
        
    },

    delete(req, res){
        Admin.delete(req.body.id, function(){
            return res.redirect(`/admin/recipes`)
        })
    },


    /* CHEF PAGES */

    chefIndex(req, res){
        Chef.all(function(chef){
            return res.render('admin/chefs/index', {chefs : chef})
        })
    },

    chefCreate(req, res){
        return res.render('admin/chefs/create')
    },

    chefPost(req, res){
        const keys = Object.keys(req.body)
        for(key of keys){
            if(req.body[key] == ""){
                res.send(`Please fill all the blank fields!`)
            }
        }
        Chef.create(req.body, function(chef){
            return res.redirect(`/admin/chefs`)
        })
    },

    chefShow(req, res){

        Chef.show_recipes(req.params.id, function(recipes){
            Chef.show_chef(req.params.id, function(chef){
                
                return res.render('admin/chefs/show', { recipes, chef })
            })
        })
    },

    chefEdit(req, res){
        Chef.show_chef(req.params.id, function(chef){
            if(!chef) return res.send(`Chef not found!`)

            return res.render('admin/chefs/edit', { chef })
        })
    },

    chefPut(req, res){
        const keys = Object.keys(req.body)
        for(key of keys){
            if(req.body[key] == ""){
                res.send(`Please fill all the blank fields!`)
            }
        }

        console.log(req.body)
        
        Chef.update(req.body, function(chef){
            return res.redirect(`/admin/chefs/${req.body.id}`)
        })
            
    },

    chefDelete(req, res){
        Chef.delete(req.body.id, function(){
            return res.redirect(`/admin/chefs`)
        })
    }
    

}
