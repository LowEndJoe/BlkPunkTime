const accordiontitles = document.querySelectorAll(".accordion-title");

accordiontitles.forEach(accordiontitle => {
    accordiontitle.addEventListener("click", function (_event) {
            accordiontitle.classList.toggle("active");
        });
});