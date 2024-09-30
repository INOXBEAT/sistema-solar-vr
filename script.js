// Asegurarse de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Referencias a los planetas
    var sol = document.querySelector('#sol');
    var mercurio = document.querySelector('#mercurio');
    var venus = document.querySelector('#venus');
    var tierra = document.querySelector('#tierra');
    var marte = document.querySelector('#marte');

    // Verificar que se encuentren los elementos
    if (!sol || !mercurio || !venus || !tierra || !marte) {
        console.error('No se encontraron todos los planetas');
        return;
    }

    // Funciones para cambiar color al apuntar
    function cambiarColorEntrar(event) {
        event.target.setAttribute('color', 'orange');
    }

    function cambiarColorSalir(event) {
        event.target.setAttribute('color', event.target.getAttribute('original-color'));
    }

    // Asignar los eventos de entrada y salida del cursor a los planetas
    [sol, mercurio, venus, tierra, marte].forEach(function(planeta) {
        // Guardar el color original
        planeta.setAttribute('original-color', planeta.getAttribute('color'));

        // Añadir eventos de mouse
        planeta.addEventListener('mouseenter', cambiarColorEntrar);
        planeta.addEventListener('mouseleave', cambiarColorSalir);
    });
});
