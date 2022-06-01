/*a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el
valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than
0,5” y sino un alerta con el mensaje “Lower than 0,5”.*/

var numeroRandom = Math.random()
var resultado = ""
if(numeroRandom >= 0,5){
    resultado = "Greater than 0,5"
}else{
    resultado = "Lower than 0,5"
}
var divA = document.getElementById("a4")
divA.innerHTML = resultado

/*b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y
muestre los siguientes mensajes de alerta:
i. “Bebe” si la edad es menor a 2 años;
ii. “Niño” si la edad es entre 2 y 12 años;
iii. “Adolescente” entre 13 y 19 años;
iv. “Joven” entre 20 y 30 años;
v. “Adulto” entre 31 y 60 años;
vi. “Adulto mayor” entre 61 y 75 años;
vii. “Anciano” si es mayor a 75 años.*/

var Age = Math.random()*100
var resultado = ""
if(Age < 2){
    resultado = "Bebe";
}
else if(Age >= 2 && Age <= 12){
        resultado = "Niño";
}
else if(Age >= 13 && Age <= 19){
    resultado = "Adolecente"
}
else if(Age >= 20 && Age <= 30){
    resultado = "Joven"
}
else if(Age >= 31 && Age <= 60){
    resultado = "Adulto"
}
else if(Age >= 61 && Age <= 75){
    resultado = "Adulto Mayor"
}
else if(Age > 75){
    resultado = "Anciano"
}
var divB = document.getElementById("b4")
divB.innerHTML = resultado

