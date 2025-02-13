const objeto1 = {
  nombre: 'Daniel',
  apellidos: 'Costas',
  edad: 29,
  notas: [10, 10, 9, 8, 10],
  estadísticas: {
    inteligencia: 10,
    fuerza: 8,
    oratoria: 10,
    paciencia: 6
  }
}

// ----- [FOR NORMAL] -----
console.log('For normal -> ')
for (let i = 0; i < objeto1.notas.length; i++) {
  console.log(objeto1.notas[i])
}
console.log('')

// ----- [FOR OF] -----
// Es como el For Each de Java
// for (String cadena : lista) {
//     System.out.println(cadena);
// }
// La variable que se actualiza es el ELEMENTO en cada posición de la iteración
console.log()
console.log('For OF ->')
for (const e of objeto1.notas) {
  console.log(e)
}
console.log('')

// ----- [FOR IN] -----
// La variable que se actualiza es el INDEX en cada posición de la iteración
// También sirve para recorrer las claves de un objeto
// En cada iteración, e es la clave
// Por lo tanto, objeto1[e] será objeto1.nombre, objeto1.apellidos, etc.
// OJO, hay que usar la notación objeto[clave], por que no sirve objeto.clave

console.log()
console.log('For IN ->')
for (const e in objeto1) {
  console.log(`Clave: ${e} -> Valor: ${objeto1[e]}`)
}
console.log('')

// ----- [FOREACH] -----
// Método de los arrays para recorrerlos con una CallBack cuyos parámetros son element, index, array completo

console.log()
console.log('FOREACH')

const mostrarPantalla = e => console.log(e)
objeto1.notas.forEach(mostrarPantalla)

objeto1.notas.forEach(e => console.log(e))

objeto1.notas.forEach((e, i, a) => console.log(e))

objeto1.notas.forEach((element, index, array) => {
  console.log(`Posición: ${index} -> Elemento: ${element}`)
  console.log(array)
})

// ----- [EVERY] -----
// Método de los arrays para recorrerlos con una CallBack y valora una condición. Si se cumplen todos -> true, si alguno no se cumple -> false

console.log()
console.log('EVERY')
const arrayNumeros = [1, 2, 3, 4, 5, 6]

console.log(arrayNumeros.every(e => e < 10))
console.log(arrayNumeros.every((e, i, a) => {
  return e > 10
}))

// ----- [SOME] -----
// Método de los arrays para recorrerlos con una CallBack y valora una condición. Si se cumple alguno -> true, si no, false

const arrayNumerosLetras = [1, 2, 3, 4, 5, 6, 'hola']

console.log()
console.log('SOME')
console.log(arrayNumerosLetras.some((e) => typeof e === 'string'))

// ----- [MAP] -----
// Coge un valor, aplica un algoritmo a todos los elementos, y retorna un array con el resultado de la operación

console.log()
console.log('MAP -> ')
const arrayNumerosMultiplicadoPor2 = arrayNumeros.map((e) => e * 2)

console.log(`- ArrayNumeros (ORIGINAL) -> ${arrayNumeros} \n- ArrayNumerosMultiplicadoPor2 (MAP) -> ${arrayNumerosMultiplicadoPor2}`)

// ----- [FILTER] -----
// Para cada iteración, hace una comprobación y devuelve un array resultante con aquellos valores que cumplan la condición

console.log()
console.log('FILTER -> ')
const arrayNumerosPares = arrayNumeros.filter((e) => e % 2 === 0)
console.log(arrayNumerosPares)

// ----- [REDUCE] -----
// Para cada iteración, ejecuta una Callback que tiene 2 parámetros (acumulador, elemento) => operativa a hacer, parametroValorInicialAcumulador
// Por conveniencia, se suele poner el valor inicial del acumulador, que si es suma es 0 y si es multiplicación es 1
console.log()
console.log('REDUCE -> ')
console.log(arrayNumeros.reduce((acc, el) => acc * el, 0))
const resultado = arrayNumeros.reduce((acc, el) => {
  return acc + el
}, 100)

console.log(resultado)

// ----- [FIND] -----
// Para cada iteración, hace una comprobación y devuelve un el primer resultado que coincida. Es como FILTER, pero solo devuelve un valor

console.log()
console.log('FIND -> ')
console.log(arrayNumeros.find((e) => e > 5))
