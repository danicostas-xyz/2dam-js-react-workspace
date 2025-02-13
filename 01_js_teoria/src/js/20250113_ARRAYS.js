// 20250113

// ARRAYS

// Los array no tienen tipo, pueden contener cualquier tipo de dato

const array = [90, 'hola', Date.now(), true, [2, 3]]
console.log(array[2])

// DESTRUCTURING

const lista = [1, 2, 3]

const [a, b, c] = lista

console.log(a)

// SPREAD

const lista1 = [1, 2]
const lista2 = [3, 4, 5, 6]
const lista3 = [...lista1, ...lista2]

console.log(lista3)

// DESTRUCTURING & SPREAD (Combinar los dos conceptos)

const [primerElemento, ...resto] = [1, 2, 3, 4, 5, 6]

console.log(primerElemento)
console.log(...resto)

// MÉTODOS

// Hay métodos que modifican la estructura (push, pop, shift, unshift...)
// y los que hacen una copia (indexOf, lastIndexOf(), includes()...)
// en REACT, la buena práctica es siempre hacer una copia

const arrayCiudades = ['Vigo', 'A Coruña', 'Ourense', 'Pontevedra']
console.log(arrayCiudades.length) // 4

console.log(arrayCiudades[0], arrayCiudades[arrayCiudades.length - 1])

arrayCiudades.unshift('Ferrol')
console.log(...arrayCiudades)
arrayCiudades.push('Cambados')
console.log(...arrayCiudades)

const arrayPaíses = ['Venezuela', 'Colombia', 'Brasil', 'Argentina']

const arrayUnido = arrayCiudades.concat(arrayPaíses)
console.log(arrayUnido)

const arrayUnido1 = [...arrayCiudades, ...arrayPaíses]
console.log(arrayUnido1)

const arrayUnido2 = [arrayCiudades, arrayPaíses]
console.log(arrayUnido2)
