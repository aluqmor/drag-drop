import { uiDrag } from "../js/uiDrag.js";
import { CartaFactory } from "../js/cartaFactory.js";

export class Juego {
    constructor(contenedorCartasSelector, contenedorSelector, cartaSelector) {
        this.contenedorCartas = document.querySelector(contenedorCartasSelector);
        this.contenedorSelector = contenedorSelector;
        this.cartaSelector = cartaSelector;
        this.palos = ['bastos', 'espadas', 'copas', 'oros'];
        this.numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }

    iniciar() {
        this.crearCartas();
        this.drag();
    }

    crearCartas() {
        this.palos.forEach(palo => {
            this.numeros.forEach(numero => {
                const carta = CartaFactory.crearCarta(palo, numero);
                this.contenedorCartas.appendChild(carta);
            });
        });
    }

    drag() {
        uiDrag.init(this.contenedorSelector, this.cartaSelector);
    }
}