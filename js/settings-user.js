const accordons = document.querySelectorAll(".accordion-content")
console.log(accordons)
accordons.forEach(function (item){
    item.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle("hidden")
    })
    
});
