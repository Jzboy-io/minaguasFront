// Lógica para el botón de hamburguesa
document.getElementById('menuToggle').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.querySelector('.main-content');

    sidebar.classList.toggle('collapsed');  // Alterna la clase para colapsar o expandir el sidebar
    mainContent.classList.toggle('collapsed');  // Mueve el contenido principal
});