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

exports.post = (req, res) => {
    const keys = Object.keys(req.body)
  
    for(key of keys){
      if(req.body[key] == ""){
        return res.send('Please fill all fields!')
      }
    }
  
    let id = 1
    const lastRecipe = data.recipes[data.recipes.length - 1]
    
    if(lastRecipe){
      id = lastRecipe.id + 1
    }
  
    data.recipes.push({
      id,
      ...req.body
    })
    
    console.log(req.body)
    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
      if(err) res.send("Write file error!")
      
      res.redirect(`recipes/${id}`)
    })


    // const keys = Object.keys(req.body)
    // for(key of keys){
    //     if(req.body[key] == ""){
    //         return res.send(`Preencha todos os campos em branco!`)
    //     }
    // }

    // let { image, title, author, ingredients, preparation, information } = req.body
    // const id = Number(data.recipes.length + 1)

    // data.instructors.push({ id, image, title, author, ingredients, preparation, information })

    // fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    //     if(err){
    //         return res.send("Write file error")
    //     }
    //     return res.redirect(`/admin/recipes/${id}`)
    // })
}