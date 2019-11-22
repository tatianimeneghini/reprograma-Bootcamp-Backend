//Função calcular pontuação
function calcularPonto(resultado){
	if (resultado == "v"){
	  return '3 pontos';
	}else if (resultado == 'e'){
	  return "1 ponto";
    }else if (resultado == 'd'){
	  return 0;
	}else{
	  return 'Resultado desconhecido';
	}
}

console.log('Bahia ganhou');
console.log(calcularPonto('v'));
console.log(calcularPonto('e'));
console.log(calcularPonto('d'));