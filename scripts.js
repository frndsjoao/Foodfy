const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for(let card of cards){
    card.addEventListener("click", function(){
        modalOverlay.classList.add('active')
        const imagemId = card.getAttribute("id")
        const title = card.querySelector('.card_title').innerHTML
        const author = card.querySelector('.card_info').innerHTML

        modalOverlay.querySelector(".modal-img").src=`assets/${imagemId}.png`
        modalOverlay.querySelector(".modal-title").innerHTML = title
        modalOverlay.querySelector(".modal-info").innerHTML = author
    })
}


document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})