
/**
 * 
 * @param {String} carta Es el string de la carta en juego proveniente del array del deck.
 * @returns {Number} Retorna el valor numérico de la carta.
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}