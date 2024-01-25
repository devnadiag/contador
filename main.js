let contador = document.getElementById('contador')
let decremento = document.getElementById('decrementar')
let incremento = document.getElementById('incrementar')

let numeroInical = 0

function decrementar(){
    numeroInical--
    contador.innerText = numeroInical
}

function incrementar(){
    numeroInical++
    contador.innerText = numeroInical
}
decremento.addEventListener('click', decrementar)
incremento.addEventListener('click', incrementar)

