let user = {
    id: 1,
    name: 'marlon burbano',
    age: 25,
}

for (let prop in user) {
    console.log(prop, ':', user[prop])
}


// aunque se puede acceder a los elementos de un
// array con for in, es mejor utilizar for of

let animales = ['caballo', 'perro', 'pato']

for (let indice in animales) {
    console.log(indice, animales[indice])
}