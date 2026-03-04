function execAction(command, value = null) {
        document.execCommand(command, false, value);
        document.getElementById('editor').focus();
    }

    function saveData() {
        const htmlContent = document.getElementById('editor').innerHTML;
        const textContent = document.getElementById('editor').innerText;
        console.log("Результат (HTML):", htmlContent);
        alert("Текст сохранен! Проверьте консоль (F12)");
    }
    
const accordons = document.querySelectorAll(".accordion-content")
console.log(accordons)
accordons.forEach(function (item){
    item.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle("hidden")
    })
    
});

const openbtn = document.querySelector(".accordion-toogle-input-txt")
const modalCard = document.querySelector(".modal-card-overlay")
const modalCardClose = document.querySelector(".btn-back")

openbtn.addEventListener('click', function () {
    modalCard.classList.remove("hidden")
})
modalCardClose.addEventListener('click', function () {
    modalCard.classList.add("hidden")
})
const openbtntwo = document.querySelector(".accordion-toogle-input-btn")
const modalCardtwo = document.querySelector(".modal-card-overlay-2")
const modalCardClosetwo = document.getElementById("btn-close")

openbtntwo.addEventListener('click', function () {
    modalCardtwo.classList.remove("hidden")
})
modalCardClosetwo.addEventListener('click', function () {
    modalCardtwo.classList.add("hidden")
})