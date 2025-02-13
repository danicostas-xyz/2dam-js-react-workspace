import { readFileSync } from 'fs'

// NOTA: Cargar el fichero snorlax.json

const dataJson = readFileSync('02_EJERCICIOS/src/assets/snorlax.json', 'utf8')
const data = JSON.parse(dataJson)

// 1. IIFE para mostrar habilidades (Revisar Tema 3.5 Pagina 6)

// Enunciado: Crea una función autoejecutable (IIFE) que recorra el
// array de habilidades (abilities) en el archivo JSON.
// Obtén los nombres de las habilidades y muéstralos en la consola como un array.

// ;(function () {
//   const abilitiesArray = []
//   data.abilities.forEach(element => {
//     abilitiesArray.push(element.ability.name)
//   })
//   console.log(abilitiesArray)
// })()

// 2. Callback para mostrar nombres de juegos (Revisar Tema 3.5 Pagina 8)

// Enunciado: Escribe una función llamada getGameNames que reciba un callback.
// Esta función debe recorrer el array game_indices del archivo JSON,
// obtener los nombres de las versiones del juego y pasarlos al callback,
// que debe imprimirlos en la consola como un array.

// const getGameNames = (callBack) => {
//   const arrayGameNames = []
//   data.game_indices.forEach(element => {
//     arrayGameNames.push(element.version.name)
//   })
//   callBack(arrayGameNames)
// }

// const action = (s) => {
//   console.log(s)
// }

// getGameNames(action)

// 3. Arrow Function para calcular la altura (Revisar Tema 3.5 Pagina 11)

// Enunciado: Crea una función flecha que reciba como parámetro
// la altura de Snorlax (en decímetros) y la convierta a metros.
// Muestra el resultado en la consola.

// const calcularAltura = alturaDecimetros => alturaDecimetros / 10

// console.log(calcularAltura(data.height))

// 4. Arrow Functions y Callbacks para determinar si Snorlax es "alto" (Revisar Tema 3.5 Pagina 8 y 11)

// Enunciado: Crea una función flecha que reciba 2 parametros: la altura en decimetros y
// un callback que permita la conversion a metros.
// El objetivo es determinar si es "alto". Considera que Snorlax es alto si su altura es
// mayor o igual a 2 metros. La función debe retornar true si es alto
// y false en caso contrario. Muestra el resultado en la consola.

// const comprobarSiAlto = (alturaDecimetros, callBack) => {
//   const alturaMetros = callBack(alturaDecimetros)
//   if (alturaMetros >= 2) return true
//   return false
// }

// const calcularAltura = alturaDecimetros => alturaDecimetros / 10

// console.log(comprobarSiAlto(data.height, calcularAltura))

// 5. HOF para filtrar objetos con rareza alta (Revisar Tema 3.5 Pagina 9)

// Enunciado: Escribe una función llamada getMoves que reciba un callback.
// Esta función debe recorrer el arreglo moves del archivo JSON y obtener
// los nombres de los movimientos. Pasa estos nombres al callback,
// que debe imprimirlos en la consola. Como ejemplo, muestra los primeros
// cinco movimientos.

// const getMoves = (cb) => {
//   const nombres = []
//   data.moves.forEach(e => {
//     nombres.push(e.move.name)
//   })
//   cb(nombres)
// }

// const action = arrayMoves => {
//   console.log(arrayMoves.splice(0, 5))
// }

// getMoves(action)

// 6. HOF que retorna una función para filtrar habilidades por visibilidad (Revisar Tema 3.5 Pagina 9)

// Enunciado: Crea una función de orden superior llamada createAbilityFilter.
// Esta función debe recibir un parámetro isHidden (un booleano) y
// retornar una nueva función que, al ejecutarse,
// recorra el array de habilidades (abilities) del archivo JSON y
// devuelva un array con los nombres de las habilidades que cumplan con el
// criterio de visibilidad (is_hidden).

const createAbilityFilter = (isHidden) => {
  return function callBack () {
    const arrayAbilities = []
    data.abilities.forEach(e => {
      if (isHidden === e.is_hidden) {
        arrayAbilities.push(e.ability.name)
      }
    })
    console.log(arrayAbilities)
  }
}

createAbilityFilter(true)()
