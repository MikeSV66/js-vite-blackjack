
import _ from 'underscore';

// Esta función crea un nuevo deck

/**
 * 
 * @param {array<String>} tiposDeCarta Ejemplo:['C','D','H','S']
 * @param {array<String>} tiposEspeciales  Ejemplo: ['A','J','Q','K']
 * @returns {array<String>} retornia una nuevo deck de cartas barajeado
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta.length === 0)       
        throw new Error('tiposDeCarta es obligatorio como un arreglo de String');
    if(!tiposEspeciales || tiposEspeciales.length === 0) 
        throw new Error('tiposEspeciales es obligatorio como un arreglo de String');


    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
  
    deck = _.shuffle( deck );
   

    return deck;
}