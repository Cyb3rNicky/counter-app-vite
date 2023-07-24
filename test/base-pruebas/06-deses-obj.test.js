import {usContext} from "../../src/base-pruebas/06-deses-obj";

describe("Pruebas en 06-deses-obj", () => {
    
  test("La funcion debe retornar un objeto", () => {
    
    const testUseContext = (clave = 13, nombre = 'Nicolas', edad = 22, rango = "Capitán") => ({
      nombreClave: clave,
      nombre: nombre,
      anios: edad,
      rango: rango,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    });

   const getusContext = usContext(13, 'Nicolas', 22, 'Novato')

   expect(getusContext).toEqual(testUseContext())

  });
});
