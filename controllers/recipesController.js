const items = require('../data')


exports.index = (req, res) => {
    return res.render('recipes/admin-index', { items })
}