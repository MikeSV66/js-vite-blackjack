import { pedirCarta, valorCarta, creaCartaHTML } from "./";


/**
 * turno de la computadora
 * @param {Number} puntosMinimos puntos mínimos que la computadora necesita para ganar
 * @param {HTMLElement} HTML para mostrar los puntos
 * @param {HTMLElement} HTML para mostrar las cartas
 * @param {Array>String>} deck baraja de cartas que van quedando
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora ,deck) => {

    if (!puntosMinimos) throw Error('Puntos mínimos son necesarios');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;

        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = creaCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
