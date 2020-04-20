const data = require('../data.json')
const fs = require('fs')


exports.index = (req, res) => {
    return res.render('admin/index', { recipes: data.recipes })
}

exports.show = (req, res) => {
    const adminRecipeIndex = data.recipes[req.params.index]

    return res.render('admin/show', { recipe : adminRecipeIndex })
}

exports.create = (req, res) => {

    return res.render('admin/create')
}