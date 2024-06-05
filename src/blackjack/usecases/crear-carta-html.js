/**
 * 
 * @param {String} carta 
 * @returns {HTMLElement} imagen que retorna
 */
export const creaCartaHTML = (carta) => {

    if (!carta) throw Error('La carta es un argumento obligatorio');

     // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}