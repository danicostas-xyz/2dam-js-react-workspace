// Importar el módulo readFileSync
import { readFileSync } from 'fs'
import { arrayBuffer } from 'stream/consumers'

// Leer el archivo JSON
// TO-DO - Agregar la ruta relativa desde la carpeta del proyecto
const dataJson = readFileSync('02_EJERCICIOS/src/assets/snorlax.json', 'utf8')

// TO-DO - Convertir JSON a Object
const data = JSON.parse(dataJson)

// 1. Crea un nuevo objeto, denominado info, que tenga las claves abilities, game_indices,
// held_items, moves y stats. Asigna todos un array vacio

const info = {
  abilities: [],
  game_indices: [],
  held_items: [],
  moves: [],
  stats: []
}

// 2. Del JSON, imprime por pantalla las mismas claves que has utilizado
// al crear tu objeto info

// console.log(data.abilities, data.game_indices, data.held_items, data.moves, data.stats)

// 3. Agrega al array vacio de abilities el nombre de las habilidades contenidas en el JSON.
// 3.1. Accede manualmente a los 3 nombres y haz un push al array vacio
// 3.2. Modifica el acceso manual para que ahora utilices un for para hacer push a los 3 nombres

// info.abilities.push(data.abilities[0].ability.name)
// info.abilities.push(data.abilities[1].ability.name)
// info.abilities.push(data.abilities[2].ability.name)

// console.log('EJERCICIO 3')
// data.abilities.forEach((e, i) => {
//   info.abilities.push(data.abilities[i].ability.name)
// })

// console.log(info.abilities)
// console.log()

// 4. Modifica el array abilities del objeto info para que ahora contenga
// tres subarrays, formados por el nombre y la URL
// Borra la propiedad abilties y vuelvela a crear dinamicamente

// console.log('EJERCICIO 4')
// info.abilities = []
// console.log(info.abilities)

// data.abilities.forEach((e, i) => {
//   info.abilities.push([data.abilities[i].ability.name, data.abilities[i].ability.url])
// })
// console.log(info.abilities)
// console.log()

// 5. Usa el operador spread (...) para agregar al array vacio de game_indices de info
// los datos contenidos en game_indices del json

// console.log('EJERCICIO 5')

// info.game_indices.push(...data.game_indices)
// console.log(info.game_indices)
// console.log()

// // 6. Modifica con un bucle cada una de las posiciones del array game_indices de info
// // para que solo contena un objeto formado por game_index y name

// console.log('EJERCICIO 6')

// info.game_indices.forEach((e, i) => {
//   const name = info.game_indices[i].version.name
//   delete info.game_indices[i].version
//   info.game_indices[i].name = name
// })

// console.log(info.game_indices)

// 7. Dentro del JSON, accede a los nombres de los items de held_items.
// Crea un array con solo los nombres y unelos para crear una string separado por <->
// Guardalo dentro del info -> held_items, sobreescribiendo el array vacio

// console.log('EJERCICIO 7')

// const arrayNames = []
// data.held_items.forEach((e, i) => {
//   arrayNames.push(data.held_items[i].item.name)
// })

// console.log(data.held_items[0].item.name)
// console.log(data.held_items[1].item.name)
// console.log()
// console.log(arrayNames)

// const stringNames = arrayNames.join('_')
// console.log(stringNames)

// info.held_items = stringNames
// console.log(info.held_items)

// 8. De la clave moves del JSON, crea un array que contenga todos los nombres
// de los movimientos. Tras ello ordenalos alfabeticamente y ingresa en el array vacio
// de moves dentro los primeros 10 movimientos

// const arrayMoves = []
// data.moves.forEach((e, i) => {
//   arrayMoves.push(data.moves[i].move.name)
// })

// console.log(arrayMoves)

// const arrayMovesOrdenado = arrayMoves.toSorted()
// console.log(arrayMovesOrdenado)

// info.moves = arrayMovesOrdenado.splice(0, 10)

// console.log(info.moves)

// 9. Crea un objeto compuesto de las claves hp, attack, defense,
// specialAttack, specialDefense y speed. Ingresa los valores que se indican en JSON
// referente a estos nombres. Tras ello ingresalo en info -> stats sustituyendo al array
// vacio

const stats = {
  hp: data.stats[0].base_stat,
  attack: data.stats[1].base_stat,
  defense: data.stats[2].base_stat,
  specialAttack: data.stats[3].base_stat,
  specialDefense: data.stats[4].base_stat,
  speed: data.stats[5].base_stat
}

// console.log(stats)

info.stats = stats

// console.log(info.stats)

// // 10. Dentro de stats convierte el objeto en un array,
// // aplanalo y elimina los strings El resultado te tiene que quedar
// // los valores numericos de las stats

info.stats = Object.entries(info.stats)
console.log(info.stats)
info.stats = info.stats.flat()
console.log(info.stats)

info.stats.forEach((e, i) => {
  if (typeof info.stats[i] === 'string') {
    info.stats.splice(i, 1)
  }
})

console.log(info.stats)
