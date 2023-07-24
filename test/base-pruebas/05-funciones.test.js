import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 
    
    test('getUser debe retornar un objeto', () => { 
        
        const testUser = {
          uid: 'Ndv1307',
          username: 'Devilman013',
        };

        const user = getUser()

        expect(user).toEqual(testUser)

    })

    test('getUsuarioActivo debe de retornar un objeto', () => { 
        
        const name = 'Nicolas'

        const testUsuarioActivo = {
          uid: "ABC567",
          username: name,
        };

        const usuarioActivo = getUsuarioActivo(name)
        
        expect(usuarioActivo).toEqual(testUsuarioActivo)
     })
 })