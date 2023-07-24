export const usContext = ({ clave = 13, nombre = 'Nicolas', edad = 22, rango = "Capitán"}) => {

    // console.log( nombre, edad, rango );
    
    return {
        nombreClave: clave,
        nombre: nombre,
        anios: edad,
        rango: rango,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}


