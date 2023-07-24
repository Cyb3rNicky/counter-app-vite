import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe retornar un heroe por id", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById debe retornar undefined si no existe", () => {
    const id = 13;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

  //Tarea:
  // getHeroesByOwner

  test("getHeroesByOwner debe retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";

    const testHero = [
      {
        id: 1,
        name: "Batman",
        owner: "DC",
      },
      {
        id: 3,
        name: "Superman",
        owner: "DC",
      },
      {
        id: 4,
        name: "Flash",
        owner: "DC",
      },
    ];

    const hero = getHeroesByOwner(owner);

    expect(hero.length).toBe(3)
    expect(hero).toEqual(testHero);
    expect(hero).toEqual(hero.filter( (heroe) => heroe.owner === owner ))
    
  });

  test("getHeroesByOwner debe retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";

    const testHero = [
      {
        id: 2,
        name: "Spiderman",
        owner: "Marvel",
      },
      {
        id: 5,
        name: "Wolverine",
        owner: "Marvel",
      },
    ];

    const hero = getHeroesByOwner(owner)
    
    expect(hero.length).toBe(2)
    expect(hero).toEqual(testHero)
    expect(hero).toEqual(hero.filter((heroe) => heroe.owner === owner));
  });
});
