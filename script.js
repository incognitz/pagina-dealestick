// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Cambio de color del título al pasar el ratón
    const tituloPrincipal = document.querySelector('h1');

    tituloPrincipal.addEventListener('mouseover', function () {
        cambiarColorTexto('#45A2FF');
    });

    tituloPrincipal.addEventListener('mouseout', function () {
        cambiarColorTexto('#fff');
    });

    function cambiarColorTexto(color) {
        tituloPrincipal.style.color = color;
    }

    // Animación de desplazamiento suave al hacer clic en los enlaces del menú
    const enlacesMenu = document.querySelectorAll('nav a');

    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', function (event) {
            event.preventDefault();

            const destinoId = this.getAttribute('href').substring(1);
            const destino = document.getElementById(destinoId);

            if (destino) {
                window.scrollTo({
                    top: destino.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
