const objeto = {
  edad: 18,
  altura: 177,
  nombre: 'Daniel',
  asignaturas: ['Sistemas', 'Programación']
}

// ACCESO A PROPIEDADES DEL OBJETO

console.log(objeto['edad'])
console.log(objeto.edad)

// ELIMINAR PROPIEDADES (Se elimina el par clave-valor, no solo el valor)

delete objeto.edad

console.log(objeto)

// MODIFICAR PROPIEDADES

console.log(objeto.altura)
objeto.altura = '189'
console.log(objeto.altura)

// CREAR PROPIEADES DINÁMICAMENTE
// Se crean las propiedades como si accedieses y/o modificases un valor

objeto.objetoInterno = {
  variable1: 'Hola',
  variable2: ['Buenas Tardes', 'Qué tal?']
}

console.log(objeto)

console.log(objeto.objetoInterno.variable1) // Hola

// DESTRUCTURING DE PROPIEDADES DE OBJETO

const objeto2 = { numero: 1, nombre: 'Farid', booleano: true }

const { numero, nombre, booleano } = objeto2

console.log(numero, nombre, booleano) // OJO. LAS NUEVAS VARIABLES TIENEN QUE LLAMARSE IGUAL QUE LAS PROPIEDADES DEL OBJETO

// SPREAD EN OBJETOS

// MÉTODOS DE OBJETOS

// - Keys

console.log(Object.keys(objeto))

// - Values

console.log(Object.values(objeto))

// - Entries

console.log('----------------------------')

console.log(Object.entries(objeto))

// CONVERSIÓN DE OBJETO DE JAVASCRIPT A JSON

console.log(typeof objeto)
const json = JSON.stringify(objeto)
console.log(json, typeof json)
const objetoDesdeJson = JSON.parse(json)
console.log(typeof objetoDesdeJson)
