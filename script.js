document.addEventListener("DOMContentLoaded", function() {
    const hamburgerIcon = document.getElementById("hamburger-icon");
    const mobileMenu = document.getElementById("mobile-menu");

    hamburgerIcon.addEventListener("click", function() {
        mobileMenu.style.display = mobileMenu.style.display === "block" ? "none" : "block";
    });
});