//Função cacular ângulo
function calcularFuncao(angulo){
  if (angulo > 0 && angulo < 90) {
      return 'O ângulo é agudo';
    } else if (angulo == 90){
      return 'O ângulo é reto';
    } else if (angulo > 90 && angulo < 180){
      return 'O ângulo é obtuso';
    } else if (angulo == 0 || angulo == 180){
      return 'O ângulo é raso';
    } else if (angulo >= 181 && angulo <= 359){
      return 'O ângulo é côncavo';
    } else if (angulo === 360){
      return 'O ângulo é completo';
    } else {
    return 'Valor inválido!'}
}
  

let angulo = parseInt(prompt('Digite o ângulo: '));
console.log(calcularFuncao(angulo));
  
//Função verificar produto (usando <switch>)
function verificarProduto(produto){
switch(produto){
	case '100':
	console.log('Cachorro quente = R$1,70');
	break;
	case '101':
	console.log('Bauru simples = R$2,30');
	break;
	case '102':
	console.log('Bauru com ovo = R$2,60');
	break;
	case '103':
	console.log('Hamburguer = R$2,40');
	break;
	case '104':
	console.log('Cheeseburguer = R$2,50');
	break;
	case '105':
	console.log('Refrigerante = R$1,00');
	break;	
	default:	
	console.log('Código inválido. Inserir número entre 100 e 105');	
	}
}

let produto = prompt('Digite o seu pedido: 100 - Cachorro quente | ' +
                     '101 - Bauru Simples | 102 - Bauru com ovo | ' +
                     '103 - Hamburguer | 104 - Cheeseburguer | '
                     + '105 - Refrigerante');
verificarProduto(produto);