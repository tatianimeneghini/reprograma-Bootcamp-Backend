//Calcular IMC
function calcularImc(altura, peso){;
	let imc = peso / (altura**2);
    console.log(imc);
    return imc;
}

calcularImc(1.7, 58);