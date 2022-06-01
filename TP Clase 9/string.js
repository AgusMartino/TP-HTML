/*a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
texto en mayúscula (utilizar toUpperCase).*/

var string = "abcdefghijk"
var div = document.getElementById("a2")
div.innerHTML = string.toUpperCase()

/*b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los primeros 5 caracteres guardando el resultado en una nueva
variable (utilizar substring).*/

var string = "abcdefghijk"
var resultado = string.substring(0,5)
var div = document.getElementById("b2")
div.innerHTML = resultado

/*c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los últimos 3 caracteres guardando el resultado en una nueva variable
(utilizar substring).*/

var string = "abcdefghijk"
var resultado = string.substring(7,10)
var div = document.getElementById("c2")
div.innerHTML = resultado

/*d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con la primera letra en mayúscula y las demás en minúscula. Guardar el
resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
el operador +).*/

var string = "abcdefghijk"
var resultado1 = string.substring(8,11)
var resultado2 = string.substring(0,8)
var resultado = resultado2.toLowerCase() + resultado1.toUpperCase()
var div = document.getElementById("d2")
div.innerHTML = resultado

/*e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
variable (utilizar indexOf).*/

var string = "abcde fghijk"
var resultado = indexOf(" ",5)
var div = document.getElementById("e2")
div.innerHTML = resultado

/*f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
generar un nuevo string que tenga la primera letra de ambas palabras en
mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
toUpperCase, toLowerCase y el operador +).*/

var string = "abcdefghijk abcdefghijk"
var espacio = string.indexOf(" ",12)
var mayuscula1 = string.substring(0,1).toUpperCase() 
var mayuscula2 = string.substring(12,13).toUpperCase()
var minuscula1 = string.substring(1,11).toLowerCase()
var minuscula2 = string.substring(13,23).toLowerCase()
var resultado = mayuscula1 + minuscula1 + " " + mayuscula2 + minuscula2
var div = document.getElementById("f2")
div.innerHTML = resultado
