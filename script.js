document.addEventListener("DOMContentLoaded", function () {
  const modales = document.querySelectorAll('.modal');
  let jugadores = document.querySelectorAll('.jugador')
  

  jugadores.forEach(element => {
    element.addEventListener('click', (e) => {
        // Oculta todos los modales
        modales.forEach(modal => {
            modal.classList.remove('modal-activado');
        });

        // Muestra el modal del elemento clicado
        e.target.children[0].classList.add('modal-activado');
        console.log('agregado');
    });
});
});


