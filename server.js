const express = require('express')
const nunjucks = require('nunjucks')
const items = require('./data')

const server = express()
server.listen(3000, function(){
    console.log('server conected!')
})

server.use(express.static('public'))

server.set('view engine', 'njk')
nunjucks.configure('views', {
    express: server,
    noCache: true
})

server.get('/', function(req, res){
    const index = {
        "title": "As melhores receitas",
        "subtitle": "Aprenda a construir os melhores pratos com receitas criadas por profisionais do mundo inteiro.",
        "image": "chef.png"
    }
    return res.render('index', { index, items })
})

server.get('/sobre', function(req, res){
    return res.render('sobre')
})

server.get('/receitas', function(req, res){
    return res.render('receitas')
})

server.get('/receitas/:index', function(req, res){
    const recipes = items
    const recipesIndex = req.params.index;
    const singleRecipe = recipes[recipesIndex]

    return res.render('single-recipe', { items : singleRecipe })
})
