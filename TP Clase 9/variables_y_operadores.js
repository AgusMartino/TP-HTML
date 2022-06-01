/*a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor
de la suma de ambos números en una 3er variable.*/

var numeroUno = 2
var numeroDos = 2
var resultado = 2+2
var div = document.getElementById("a1")
div.innerHTML = resultado

/*b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una
3er variable.*/

var stringUno = "StringUno"
var stringDos = "StringDos"
var resultado = stringUno + stringDos
var div = document.getElementById("b1")
div.innerHTML = resultado

/*c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de
letras del string) guardando el resultado de la suma en una 3er variable (utilizar
length).*/

var stringUno = "StringUno"
var stringDos = "StringDos"
var resultado = stringUno.length + stringDos.length
var div = document.getElementById("c1")
div.innerHTML = resultado
