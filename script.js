document.addEventListener("DOMContentLoaded", function () {
  const modales = document.querySelectorAll('.modal');
  
  modales.forEach(function(modal) {
    modal.addEventListener('click', function(event) {
      event.stopPropagation(); // Evita que el clic en el modal cierre el mismo
    });
  });
  
  document.addEventListener('click', function(event) {
    const clickedElement = event.target;
    const activator = clickedElement.closest('.elemento'); // Obtén el elemento que activa el modal
    
    if (!activator) {
      modales.forEach(function(modal) {
        modal.style.display = 'none'; // Oculta todos los modales si se hace clic fuera de ellos
      });
    }
  });
});

