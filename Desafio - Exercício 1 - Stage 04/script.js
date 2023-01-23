    
let numeroUm = Number(prompt('Escreva um número:'))
let numeroDois = Number(prompt('Escreva outro número:'))
let somar = numeroUm + numeroDois
let restar = numeroUm % numeroDois


function soma() {
    alert(`A soma de ambos os números é igual a: ${somar}`)
}

function subtracao() {
    let subtrair = numeroUm - numeroDois
    alert(`A subtração de ambos os números é igual a: ${subtrair}`)
}

function multiplicacao() {
    let multiplicar = numeroUm * numeroDois
    alert(`A multiplicação de ambos os números é igual a: ${multiplicar}`)
}

function divisao() {
    let dividir = numeroUm / numeroDois
    alert(`A divisão de ambos os números é igual a: ${dividir}`)
}

function resto() {
    alert(`O resto da divisão de ambos os números é igual a: ${restar}`)
}

if(numeroUm === numeroDois){
    alert("Que coincidência!! Os números escolhidos sã estritamente iguais!")
} 

soma()
if (restar == 0) {
    alert("Para via de curiosidade, a soma entre os números é um número par!")
} else {
    alert("Para via de curiosidade, a soma entre os números é um número ímpar!")
}
subtracao()
multiplicacao()
divisao()
resto()

