// Obtener elementos
const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.calculator button');

let operacion = "";

// Función para manejar los clics
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const valor = boton.textContent;

        if (valor === 'C') {
            operacion = "";
            pantalla.value = "";
        } else if (valor === '=') {
            try {
                // Evaluar la operación
                operacion = eval(operacion).toString();
                pantalla.value = operacion;
            } catch (e) {
                pantalla.value = "Error";
                operacion = "";
            }
        } else {
            operacion += valor;
            pantalla.value = operacion;
        }
    });
});
