const openbtn = document.querySelector(".options-card-btn-red-txt")
const modalCard = document.querySelector(".modal-card-overlay")
const modalCardClose = document.querySelector(".btn-back-2")

openbtn.addEventListener('click', function () {
    modalCard.classList.remove("hidden")
})
modalCardClose.addEventListener('click', function () {
    modalCard.classList.add("hidden")
})