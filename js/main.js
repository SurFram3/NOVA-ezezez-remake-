const openbtn = document.querySelector(".phone-section-btn")
const modalCard = document.querySelector(".modal-card-overlay")
const modalCardClose = document.querySelector(".close-btn")

openbtn.addEventListener('click', function () {
    modalCard.classList.remove("hidden")
})
modalCardClose.addEventListener('click', function () {
    modalCard.classList.add("hidden")
})