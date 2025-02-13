const nombre = 'Dani'
const esMayorDeEdad = true
const altura = 1.80
const var4 = undefined
const var5 = null

// Uso de typeof para saber el tipo de dato de una variable

console.log(`La variable nombre, con valor ${nombre} es de tipo ${typeof nombre}`) // string
console.log(`La variable esMayorDeEdad, con valor ${esMayorDeEdad} es de tipo ${typeof esMayorDeEdad}`) // boolean
console.log(`La variable altura, con valor ${altura} es de tipo ${typeof altura}`) // number
console.log(`La variable var4, con valor ${var4} es de tipo ${typeof var4}`) // undefined
console.log(`La variable var5, con valor ${var5} es de tipo ${typeof var5}`) // object

// Conversión de tipos explícita

const numero = 10
const texto = String(numero)
console.log(`La variable numero, con valor ${numero} es de tipo ${typeof numero}`)
console.log(`La variable texto, con valor ${texto} es de tipo ${typeof texto}`)

// Conversión de tipos implícita

const numero2 = 20
const texto2 = 'Hola'
const resultado = numero2 + texto2
console.log(`La variable resultado, con valor ${resultado} es de tipo ${typeof resultado}`)

// JavaScript intenta hacer la conversión siempre, incluso si quieres pasar un String a número,
// en este caso, si el String no es un número, el resultado será NaN (pero el typeof será number igualmente)

// También, si quieres convertir un boolean a número, el resultado será 1 si es true y 0 si es false, y viceversa

// Impresión por consola

// Console log permite separar con comas los argumentos que se le pasan, y los imprime en la consola con un espacio entre ellos
// Template literals permite concatenar variables con texto de una forma más sencilla

console.log(`Hola, me llamo ${nombre}, tengo ${altura} metros de altura y soy ${esMayorDeEdad ? 'mayor' : 'menor'} de edad`)

const booleano = true
const string = 'Hola'

const numeroBoolean = Number(booleano)
const numeroString = Number(string)

console.log(numeroBoolean, numeroString)

// Operadores igualdad/desigualdad flexible/estricto

// == != (flexible)

console.log(5 == '5') // true
console.log(5 != '5') // false

// === !== (estricto)

console.log(5 === '5') // false
console.log(5 !== '5') // true

// El operador +, cuando haya un String, va a concatenar.
// Cualquier valor se convertirá a String y la salida será una concatenación de Strings.

// console.log(+'100') -> Number, porque es un unario.
// console.log(+true) -> Number, porque es unario. (1)
// console.log(+null) -> Number, porque es unario. (0)
// console.log(+undefined) -> Number, porque es unario, NaN
// console.log(100 + '') -> String, porque aunque se concatene con un String vacío, es un String.

// El operador - convierte todo a Number, aunque restes dos Strings

// Por lo general, el operador de igualdad débil, == convierte a números
console.log('true' == true) // false, porque 'true' en número es = NaN

// Truthy y Falsy

// Falsy -> false, 0, 0.00, 0n, String vacío, Null, NaN, Undefined
// Truthy -> el resto

const var1 = 'two'
const var2 = true

if (var1 > var2) {
  console.log('No se ejecuta')
} else {
  console.log('Se ejecuta')
}

console.log(Number.MAX_VALUE, Number.MIN_VALUE)
console.log(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY)

const variable = '2'

if (!(Number.isNaN(variable))) {
  const variable2 = +variable
  console.log(variable2)
} else {
  console.log('No se puede hacer la operación')
}

const frase = 'Aprendiendo JavaScript'

console.log(frase.length)
console.log(frase.toLowerCase().includes('Java'.toLowerCase()) ? 'incluye Java' : 'no incluye java')
console.log(frase.toUpperCase())
console.log(frase.replace('JavaScript', 'Python'))
console.log(frase.slice(0, 10))
console.log(frase.repeat(3))

console.log((Math.ceil(Math.random() * 10)))
console.log(Math.pow(2, 3))
console.log(Math.max(10, 20, 30))
