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
// Obtener el modal y el botón para abrirlo
var modal = document.getElementById("openModal");
var btn = document.getElementById("openButton");
// Obtener el elemento de cierre (x)
var span = document.getElementsByClassName("close")[0];
// Cuando el usuario hace clic en el botón, abrir el modal
btn.onclick = function() {
  modal.style.display = "block";
}
// Cuando el usuario hace clic en (x), cerrar el modal
span.onclick = function() {
  modal.style.display = "none";
}
// Cuando el usuario hace clic fuera del modal, cerrarlo
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

