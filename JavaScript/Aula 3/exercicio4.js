//Calcular IMC
function calcularImc(altura, peso){;
    let imc = peso/altura**2;
    return imc.toFixed(2);
}

let altura = parseFloat(prompt("Insira sua altura: "));
let peso = parseFloat(prompt("Insira seu peso: "));
alert("Seu IMC é " + calcularImc(altura, peso));