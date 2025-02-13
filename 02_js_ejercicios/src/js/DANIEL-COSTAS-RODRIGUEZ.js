// Importar el módulo readFileSync
import { readFileSync } from 'fs'

// Leer el archivo JSON
const dataJson = readFileSync('02_EJERCICIOS/src/assets/cherry.json', 'utf8')

// Convertir JSON a Object
const data = JSON.parse(dataJson)

// Ejercicio 1
console.log('----------------------------------------------------------')

const splitUrlBySlash = url => url.split('/').map(e => e.toUpperCase())

console.log(splitUrlBySlash(data.firmness.url))

// Ejercicio 2
console.log('----------------------------------------------------------')

const filterObjectsWithUrl = function (input) {
  return Object.values(input).filter(e => typeof e === 'object').filter(e => e.url !== undefined)
}
const urlsFiltered = filterObjectsWithUrl(data).map(e => e.url)

console.log(urlsFiltered)

// Ejercicio 3
console.log('----------------------------------------------------------')

;(function (input) {
  const afirmativo = '-> Alguno de los elementos tiene potencia distinta de 0'
  const negativo = '-> Ninguno de los elementos tiene potencia distinta de 0'
  console.log(input.some(e => e.potency !== 0) ? afirmativo : negativo)
  console.log(`-> Suma total de todas las potencias: (${input.reduce((acc, e) => acc + e.potency, 0)})`)
})(data.flavors)

// Ejercicio 4
console.log('----------------------------------------------------------')

const filtrarNumeros = inputData => {
  const objetoFiltrado = Object.fromEntries(Object.entries(inputData).filter(e => typeof e[1] === 'number'))
  for (const i in objetoFiltrado) {
    console.log(`- Clave: ${i} \n- Valor: ${objetoFiltrado[i]}\n`)
  }
}
filtrarNumeros(data)

// Ejercicio 5
console.log('----------------------------------------------------------')

function procesarFlavors (inputData) {
  return inputData.map(e => e.flavor.name).toSorted().join('->')
}
console.log(procesarFlavors(data.flavors))

// Ejercicio 6
console.log('----------------------------------------------------------')

const contarVocales = inputData => {
  const letrasSeparadas = inputData.map(e => e.split('')).flat()
  const numeroVocales = letrasSeparadas.reduce((acc, el) => {
    if (el === 'a' || el === 'e' || el === 'i' || el === 'o' || el === 'u') {
      acc++
    }
    return acc
  }, 1)

  console.log(`-> Número total de vocales: ${numeroVocales}`)
}

contarVocales(Object.keys(data))
