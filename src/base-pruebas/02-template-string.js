export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

const nombre = 'Nicolas'

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );