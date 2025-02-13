// FUNCIONES ANÓNIMAS - EXPRESIVAS

const sumar = function (a, b) {
  return a + b
}

console.log(`2 + 3 = ${sumar(2, 3)}`)

// FUNCIÓN AUTOEJECUTABLE
// Importaciones dinámicas, para usar variables que solo se usan una vez de manera efímera y luego se libere la memoria...

// Ojo, hay que ponerle punto y coma (;) antes de la declaración, o después de la anterior

;(function () {
  console.log('Autoejecutada')
})()

// AUTOEJECUTABLE QUE DEVUELVE UN VALOR (SE PUEDE GUARDAR EN UNA VARIABLE)

const suma = (function () {
  return sumar(3, 4)
})()

console.log(suma)

// AUTOEJECUTABLE CON PARÁMETROS

;(function (nombre) {
  console.log(`Hola ${nombre}`)
})('Dani')

// FUNCIONES CALLBACK y HOF
// Funciones que se pasan como argumento a otra función (Callback)
// HOF -> Función que recibe otra función como parámetro
// HOF -> Función que retorna otra función

// ARROW FUNCTION
const funcionFlecha = () => {
  console.log('Función Flecha')
}

// Simplificaciones ->
// Se puede omitir las llaves si haces un return de una línea (RETURN IMPLÍCITO)
// Se pueden omitir los paréntesis si solo hay un parámetro. Si no hay ninguno o hay más de uno, hay que ponerlos

const funcionFlechaReturn = a => a

console.log(funcionFlechaReturn('hola'))

const funcionFlechaB = (x, y) => x + y

console.log(funcionFlechaB(3, 4))

// Retorno de OBJETOS en una sola línea
// Si haces return implícito en una sola línea, hay que meter la declaración del objeto con llaves dentro de paréntesis

const funcionReturnObjeto = (nombre, edad) => ({ nombre, edad })

console.log(funcionReturnObjeto('Daniel', 29))
