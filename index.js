const lampada = document.querySelector("#imagem-lampada")
const botao = document.querySelector("#botãoLigar")
let estadoLampada = "Desligada"


function ligar() {
    if (estadoLampada == "Desligada") {
        lampada.setAttribute('src', 'ligada.png')
        botao.textContent = 'Desligar'
        estadoLampada = "Ligada"
    } else if (estadoLampada == "Ligada") {
        lampada.setAttribute('src', 'desligada.png')
        botao.textContent = 'Ligar'
        estadoLampada = "Desligada"
    }
}

function quebrar() {
    lampada.setAttribute('src', 'quebrada.png')
    estadoLampada = "Quebrada"

}