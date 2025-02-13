// LO MEJOR ES IR DE LO MÁS ESPECÍFICO (EL FINAL DEL PROBLEMA) HACIA ATRÁS
// array[0].tal.tal.tal.some((blablabal)), así ya encuentras una parte y luego esa condición vas para atrás.

// Importar el módulo readFileSync
import { readFileSync } from 'fs'

// Leer el archivo JSON
// TO-DO - Agregar la ruta relativa desde la carpeta del proyecto
const dataJson = readFileSync('02_EJERCICIOS/src/assets/snorlax.json', 'utf8')

// Convertir JSON a Object
const data = JSON.parse(dataJson)

// Usa for...in para recorrer las propiedades del objeto principal
// y muestra su tipo de dato. Usa for...of para iterar sobre los índices de juegos
// (game_indices) y mostrar los nombres de las versiones.

for (const clave in data) {
  console.log(typeof data[clave])
}

console.log('---')

for (const e of data.game_indices) {
  console.log(e.version.name)
}

console.log('-----------------------------------------------------------------')

// Obtén un array con los nombres de todas las habilidades (abilities) del Pokémon,
// añadiendo el prefijo "Ability: " a cada nombre. (Posible requisito: Map)

const abilities = data.abilities.map(e => `Ability: ${e.ability.name}`)
abilities.forEach(e => console.log(e))

console.log('-----------------------------------------------------------------')

// Filtra los movimientos (moves) que se pueden aprender en el nivel inicial (level_learned_at: 0).
// Devuelve un array con los nombres de estos movimientos. (Posible requisito: Filter, Some, Map)

const moves = data.moves.map(e => e)
const movesAtLevelZero = moves.filter(e => e.version_group_details.some((e) => e.level_learned_at === 0))
const moveNamesAtLevelZero = movesAtLevelZero.map(e => e.move.name)
moveNamesAtLevelZero.forEach(e => console.log(e))

console.log('-----------------------------------------------------------------')

// Encuentra la habilidad que tenga is_hidden igual a true y devuelve su nombre.
// Si no existe, devuelve un mensaje indicando que no hay habilidades ocultas.

const filteredAbilities = data.abilities.filter(e => e.is_hidden === true)

console.log(filteredAbilities.length !== 0
  ? `Abilitie(s) Hidden: ${filteredAbilities.map(e => e.ability.name)}`
  : 'No hay habilidades ocultas')

console.log('-----------------------------------------------------------------')

// Calcula el número total de juegos (game_indices) en los que aparece este Pokémon.
// (Posible requisito: Reduce)

const numeroTotalJuegos = data.game_indices.reduce((acc, el) => {
  return acc + 1
}, 0)

console.log(numeroTotalJuegos)
console.log('-----------------------------------------------------------------')

// Recorre el array de held_items y muestra por consola el nombre de cada ítem
// junto con las versiones en las que está disponible. El output tiene que tener el
// formato Item: <Nombre del Item>, Versiones: <Nombres de las versiones>
// (Posible requisito: forEach, Map)

data.held_items.forEach(e => {
  console.log('Item: ' + e.item.name)
  console.log('Versiones:' + e.version_details.map(e => ' ' + e.version.name))
})
console.log('-----------------------------------------------------------------')

// Verifica si todas las habilidades (abilities) no son ocultas (is_hidden).
// Además, verifica si al menos un movimiento tiene el método de aprendizaje "machine".
// (Posible requisito: every, some)

// const areEveryAbilitiesNotHidden = data.abilities.every(e => e.is_hidden === false)
// const moves = data.moves.forEach((e) => e.))

// console.log(areEveryAbilitiesNotHidden)
// console.log(someMoveMachineLearned)

// Convierte el array de habilidades (abilities) en un objeto donde las claves
// sean los nombres de las habilidades y los valores indiquen si son ocultas (is_hidden).
// (Posible requisito: Object.fromEntries)

// const habilidades = Object.fromEntries(data.abilities.map(e => [e.ability.name, e.is_hidden ? 'Oculto' : 'No oculto']))
// console.log(habilidades)
// console.log('-----------------------------------------------------------------')

// // Crea una función autoejecutable que recorra los movimientos (moves)
// // y retorne un array con objetos que contengan el nombre del movimiento
// // y su primer método de aprendizaje (move_learn_method).
// // (Posible requisito: Funcion autejecutable, map, )

// ;(function () {
//   const array1 = data.moves.map(e => {
//     return {
//       nombre: e.move.name,
//       primer_metodo_aprendizaje: e.version_group_details[0].move_learn_method.name
//     }
//   })
//   console.log(array1)
// }
// )()
