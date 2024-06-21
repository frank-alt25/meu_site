document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const navList = document.querySelector(".nav-list");

    menuIcon.addEventListener("click", () => {
        navList.classList.toggle("active");
    });

    let slideIndex = 0;
    showSlides();

    function showSlides() {
        const slides = document.querySelectorAll(".slide");
        slides.forEach((slide, index) => {
            slide.style.display = "none";
        });
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000); // Troca de imagem a cada 3 segundos
    }
});








