/**
 * 
 * @param {Array<String>} deck Arreglo de todas las cartas del deck en juego.
 * @returns {String} Retorna una carta del deck.
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}