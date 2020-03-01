const cards = document.querySelectorAll('.card')
const hideButton = document.querySelectorAll('.show-btn')

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function() {
        window.location.href = `/receitas/${i}`
    })
}

for(let i = 0; i < hideButton.length; i++) {
    hideButton[i].addEventListener("click", function(){
        document.querySelector('.content'+i).classList.toggle('hide-content')

        if(document.querySelector('.content'+i).classList.contains('hide-content')){
            hideButton[i].innerHTML = 'Mostrar'
        } else {
            hideButton[i].innerHTML = 'Esconder'
        }
    })
}