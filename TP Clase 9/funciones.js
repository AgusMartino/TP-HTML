/*a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
dicha variable en la consola del navegador.*/

var numeroUno = Math.random()*100
var numeroDos = Math.random()*100
console.log(suma(numeroUno, numeroDos))

function suma(numeroUno, numeroDos){
    var resultado = numeroUno + numeroDos
    return resultado;
}

/*b. A la función suma anterior, agregarle una validación para controlar si alguno de
los parámetros no es un número, mostrar una alerta aclarando que uno de los
parámetros tiene error y retornar el valor NaN como resultado.*/

function sumaValidacion(numeroUno, numeroDos){
    var resultado;
    if(isNaN(numeroUno)){
        alert("no es un numero el numero uno")
        resultado = "NaN"
    }
    else if(isNaN(numeroDos)){
        alert("no es un numero el numero dos")
        resultado = "NaN"
    }else{
        resultado = numeroUno + numeroDos
    }
    return resultado
}
var numeroUno = Math.random()*100
var numeroDos = Math.random()*100
console.log(sumaValidacion(numeroUno, numeroDos))

/*c. Crear una función validate integer que reciba un número como parámetro y
devuelva verdadero si es un número entero.*/

function validateInteger(numero){
    resultado = ""
    if(isNaN(numero)){
        return resultado = "No es un numero"
    }else{
        return resultado = "Es un numero"
    }
}

/*d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los
números sean enteros. En caso que haya decimales mostrar un alerta con el
error y retorna el número convertido a entero (redondeado).*/



/*e. Convertir la validación del ejercicio 6d) en una función separada y llamarla
dentro de la función suma probando que todo siga funcionando igual.*/