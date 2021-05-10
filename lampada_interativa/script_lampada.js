const lamp = document.getElementById('imagem_lampada')
const botao = document.getElementById('turnOn')
var isOn = false
var isBroken = false

const turnOn = document.getElementById('turnOn').addEventListener('click', () => {
    isOn = !isOn
    if(isOn && !isBroken) {
        lamp.src = 'imagens/ligada.jpg'
        botao.innerText = `Desligar`
    } else {
        if(!isBroken) {
            lamp.src = 'imagens/desligada.jpg'
            botao.innerText = `Ligar`
        }  
    }
    
})
lamp.ondblclick = () => {
    isBroken = !isBroken
    if(isBroken) {
        lamp.src = 'imagens/quebrada.jpg'
    } 
}

// const turnOff = document.getElementById('turnOff').addEventListener('click', () => {
//     lamp.src = 'imagens/desligada.jpg'
// })

