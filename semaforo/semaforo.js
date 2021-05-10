const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
const cor = ['green', 'yellow', 'red']
const res = document.getElementById('res')
const auto = document.getElementById('automatic')

time = 4
let index = 0


//Faz o direcionador apontar para o objeto que contem tal string e executa sua funcao

const direcionador = (evento) => {
    lightActive[evento.target.id].changeImg()
    if(evento.target.id === 'automatic') {
        cronometro()
    }
}

const lightActive = {
    'green': {
      changeImg: () => img.src = 'img/verde.png',
      time: 7000,
    },
    'red': {
      changeImg: () => img.src = 'img/vermelho.png',
      time: 7000,
    },
    'yellow': {
        changeImg: () => img.src = 'img/amarelo.png',
      time: 3000,
    },
    'automatic': {
        changeImg: funcaoAuto
      }
  }




function funcaoAuto() {
    let buscaTimer = lightActive[cor[index]].time
    time = (buscaTimer/1000) -1
    lightActive[cor[index]].changeImg()
    index++
   
    if(index == 3) {
        index = 0
    }
    setTimeout(funcaoAuto, buscaTimer)
}

function cronometro () {

    res.innerHTML = `${time}`
    time--
    setTimeout(cronometro, 1000)
}


buttons.addEventListener('click', direcionador)