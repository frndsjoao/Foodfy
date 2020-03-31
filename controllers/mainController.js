const items = require('../data')

exports.index = (req, res) => { 
    const index = {
        "title": "As melhores receitas",
        "subtitle": "Aprenda a construir os melhores pratos com receitas criadas por profisionais do mundo inteiro.",
        "image": "chef.png"
    }
    return res.render('index', { index, items })
}

exports.about = (req,res) => {
    return res.render('sobre')
}

exports.recipes = (req, res) => {
    return res.render('receitas', { items })
}

exports.sigleRecipe = (req, res) => {
    const singleRecipe = items[req.params.index]

    return res.render('single-recipe', { items : singleRecipe })
}