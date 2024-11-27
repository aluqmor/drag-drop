import { uiDrag } from "../js/uiDrag.js";
import { CartaFactory } from "../js/cartaFactory.js";  

document.addEventListener("DOMContentLoaded", () => {
    const contenedorCartas = document.querySelector('.contenedor-cartas');
    const palos = ['bastos', 'espadas', 'copas', 'oros'];
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    palos.forEach(palo => {
        numeros.forEach(numero => {
            const carta = CartaFactory.crearCarta(palo, numero);
            contenedorCartas.appendChild(carta);
        });
    });

    // Permitir el arrastre dentro del contenedor
    uiDrag.init(".contenedor", ".carta");
});