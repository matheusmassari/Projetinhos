var img = document.getElementById('img')


const red = document.getElementById('red').addEventListener('click', () => {
    img.src = 'imagens/vermelho.png'
})
const ye = document.getElementById('yellow').addEventListener('click', () => {
    img.src = 'imagens/amarelo.png'
})
const gre = document.getElementById('green').addEventListener('click', () => {
    img.src = 'imagens/verde.png'
})