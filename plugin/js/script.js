document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("mainContent");

    menuToggle.addEventListener("click", function () {
        if (window.innerWidth <= 768) {
            sidebar.classList.toggle("active");  // Para movil
        } else {
            sidebar.classList.toggle("collapsed");  // Para escritorio
            mainContent.classList.toggle("collapsed");
        }
    });
});