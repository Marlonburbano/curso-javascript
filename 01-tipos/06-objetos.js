//tipo de referencia y no es un dato primitivo

// personaje de tv 

let nombre = "goku"
let anime = "dragon ball"
let edad = 30

let personaje = { //par llave: valor
    nombre: "goku",
    anime : "dragon ball",
    edad: 30,
}
console.log(personaje)
console.log(personaje.nombre)
console.log(personaje['nombre']) //otra forma de acceder a la propiedad


personaje.edad = 13;
personaje['edad'] = 12;  // formas de acceder a la propiedad


delete personaje.anime;
console.log(personaje)
