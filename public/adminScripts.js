function addPreparation() {
    const preparations = document.querySelector('#addpreparations')
    const fieldContainer = document.querySelector('.preparation')

    const newField = fieldContainer[fieldContainer.length -1].cloneNode(true)

    if(newField.children[0].value == '') return false

    newField.children[0].value == ''
    preparations.appendChild(newField)
}

function addIngredient() {
    const ingredients = document.querySelector('#ingredients')
    const fieldContainer = document.querySelector('.ingredient')

    const newField = fieldContainer[fieldContainer.length -1].cloneNode(true)

    if(newField.children[0].value == '') return false

    newField.children[0].value == ''
    ingredients.appendChild(newField)
}

document
    .querySelector('.add-ingredient')
    .addEventListener('click', addIngredient)

document
    .querySelector('.add-preparation')
    .addEventListener('click', addPreparation)


function confirmation() {
    var deleteRecipe = confirm("Deseja realmente deletar essa receita?")

    if(deleteRecipe == true) {
        window.location.href = '/admin/recipes'
    }
}