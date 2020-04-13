const data = require('../data.json')


exports.index = (req, res) => {
    return res.render('admin/admin-index', { data: data.recipes })
}

exports.show = (req, res) => {
    const { index } = req.params
    
    return res.render('admin/admin-recipe-details', { data : data.recipes[index] })
}