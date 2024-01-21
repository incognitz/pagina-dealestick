document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar todos los enlaces de navegación
    const navLinks = document.querySelectorAll("nav a");

    // Añadir un evento de clic a cada enlace
    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            // Prevenir el comportamiento predeterminado del enlace
            event.preventDefault();

            // Obtener el ID del destino desde el atributo href
            const targetId = this.getAttribute("href").substring(1);

            // Obtener el elemento de destino
            const targetElement = document.getElementById(targetId);

            // Verificar si el elemento de destino existe
            if (targetElement) {
                // Calcular la posición del elemento de destino
                const offsetTop = targetElement.offsetTop;

                // Realizar un desplazamiento suave hacia el elemento de destino
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                });
            }
        });
    });
});
