//Função calcular Bilhetes Vendidos
function calcularBilhetesVendidos(quantidadeBilhetes){
	return Math.floor(Math.random() * quantidadeBilhetes + 1);
}

console.log(calcularBilhetesVendidos(100));