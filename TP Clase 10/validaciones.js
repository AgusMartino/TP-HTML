let peso = document.getElementById('peso')
let estatura = document.getElementById('estatura')
let error_estatura = document.getElementById('estaturaerror')
error_estatura.style.color = "red"
let error_peso = document.getElementById('pesoerror')
error_peso.style.color = "red"
let form = document.getElementById('formulario')


form.addEventListener('submit', e=>{
    e.preventDefault()
    console.log('Validando campos...')

    let mensajeErrorEstatura = []
    let mensajeErrorPeso = []

    if(estatura.value === null){
        mensajeErrorEstatura.push('Debe completar la estatura')
    }else if(estatura.value < 10){
        mensajeErrorEstatura.push('La estatura tiene que ser mayor a 10cm')
    }else if(estatura.value > 272){
        mensajeErrorEstatura.push('La estatura tiene que ser menor a 272cm')
    }
    if(peso.value === null){
        mensajeErrorPeso.push('Debe completar el peso')
    }else if(peso.value < 2){
        mensajeErrorPeso.push('El peso tiene que ser mayor a 2kg')
    }else if(peso.value > 544){
        mensajeErrorPeso.push('El peso tiene que ser menor a 544kg')
    }

    error_estatura.innerHTML = mensajeErrorEstatura
    error_peso.innerHTML = mensajeErrorPeso

    if(mensajeErrorPeso.length === 0 && mensajeErrorEstatura.length === 0){
        let resultado = document.getElementById('resultado')
        resultado.innerHTML = parseFloat(peso.value/((estatura.value/100)*(estatura.value/100)))
        console.log(resultado.value)
        let table = document.getElementById('tabla')
        table.style.display = "block"
    }

    return false;
})
