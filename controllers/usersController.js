const data = require('../data.json')

exports.home = (req, res) => {   
    return res.render('users/home', { recipes : data.recipes })
}

exports.about = (req,res) => {
    return res.render('users/about')
}

exports.recipes = (req, res) => {
    return res.render('users/recipes', { recipes : data.recipes })
}

exports.showRecipe = (req, res) => {
    const recipeIndex = data.recipes[req.params.index]

    return res.render('users/recipe', { recipe : recipeIndex })
}