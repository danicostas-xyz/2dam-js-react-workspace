// 20250113

// DATE

console.log(Date.now()) // -> Fecha actual en milisegundos (UNIX Time)

// year, month(0-11), day, hour, minutes, seconds, miliseconds
const date1 = new Date(2024, 11, 31, 23, 30, 0)
console.log(date1)

const date = new Date()
date.setFullYear(2024)
date.setMonth(0) // El mes empieza en 0
date.setDate(30)
console.log(date)

const fecha = new Date()
console.log(fecha.getDay()) // -> Día de la semana (domingo 0 - sábado 6)
console.log(fecha.getDate()) // -> Día del mes (1 - 31)
console.log(fecha.getMonth()) // -> Mes (enero 0 - diciembre 11)
console.log(fecha.getFullYear()) // -> Año

console.log(Date.UTC(2024, 11, 31, 23, 30, 0)) // -> returns the number of milliseconds between a specified date and midnight of January 1, 1970, according to UTC.

// Formatear fechas

console.log(fecha.toLocaleDateString('en-US')) // Formato inglés
console.log(fecha.toLocaleDateString()) // Formato local, en este caso, español ('es-ES')

// Cálculo con fechas

const fecha3 = new Date(2024, 0, 10, 14, 30, 0) // Enero
const fecha4 = new Date(2024, 1, 10, 14, 30, 0) // Febrero

let diferenciaFecha = fecha4 - fecha3
console.log(diferenciaFecha)

diferenciaFecha = (diferenciaFecha / 1000 / 60 / 60 / 24)
console.log(diferenciaFecha)
