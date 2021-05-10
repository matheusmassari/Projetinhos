
const botao = document.getElementById('botao').addEventListener('click', () => {

    const nome = document.getElementById('input1').value
    const alt = document.getElementById('input2')
    const pes = document.getElementById('input3')

    if(nome.length == 0 || alt.value.length == 0 || pes.value.length == 0) {
        res.innerHTML = 'Por favor, insira os dados antes de calcular'
    } else {

            
        const altura = Number(alt.value)
        const peso = Number(pes.value)

        const imcBig = peso/(altura*altura)
        const imc = imcBig.toFixed(2)

        if(imc < 18.5) {
            res.innerHTML = `Olá ${nome}, seu IMC é de ${imc} kg/m, voce esta raquitico`
        } else if(imc >= 18.5 && imc < 24.9) {
            res.innerHTML = `Olá ${nome}, seu IMC é de ${imc} kg/m, voce esta tobinha`
        } else if(imc >= 24.9 && imc < 30) {
            res.innerHTML = `Olá ${nome}, seu IMC é de ${imc} kg/m, voce esta cevado`
        } else {
            res.innerHTML = `Olá ${nome}, seu IMC é de ${imc} kg/m, voce esta uma porca prenha`
        }
    }

}
)