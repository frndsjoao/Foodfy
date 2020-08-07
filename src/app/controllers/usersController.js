const db = require('../../config/db')
const User = require('../models/User')

module.exports = {
    home(req, res) {
        User.mainPage(function(recipes){
            return res.render('users/home', { recipes } )
        })
    },

    about(req, res) {
        return res.render('users/about')
    },

    recipes(req, res) {
        User.recipePage(function(recipes){
            return res.render('users/recipes', { recipes })
        })

    },

    showRecipe(req, res) {
        User.showRecipe(req.params.id, function(recipe){
            if(!recipe) return res.send(`Recipe not found!`)

            return res.render('users/recipe', { recipe })
        })   
    },

    chefs(req, res) {
        User.chefPage(function(chefs){
            return res.render('users/chefs', { chefs })
        })
    }
}