/*a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por
consola los meses 5 y 11 (utilizar console.log).*/

const array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
var div = document.getElementById("a3")
div.innerHTML = array[4].valueOf() + ", " + array[10].valueOf()
console.log(array[4].valueOf())
console.log(array[10].valueOf())

/*b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

array.sort()
console.log(array)
var div = document.getElementById("b3")
div.innerHTML = array

/*c. Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

var div = document.getElementById("c3")
array.push("Año nuevo")
array.unshift("Año pasado")
div.innerHTML = array

/*d. Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

var div = document.getElementById("d3")
array.shift()
array.pop()
div.innerHTML = array

/*e. Invertir el orden del array (utilizar reverse).*/

var div = document.getElementById("e3")
array.reverse()
div.innerHTML = array

/*f. Unir todos los elementos del array en un único string donde cada mes este
separado por un guión - (utilizar join).*/

var div = document.getElementById("f3")
div.innerHTML = array.join("-")

/*g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre
(utilizar slice).*/

var div = document.getElementById("g3")
const arrayMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
const arrayMeses2 = arrayMeses.slice(4,11)
div.innerHTML = arrayMeses2

